import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

// This component is likely to be replaced or heavily modified.
// Kept for reference or potential future use in a different context.
const campaigns = [
  {
    id: 1,
    title: "Bantu Pendidikan Anak-Anak Pedalaman",
    description: "Setiap anak berhak mendapatkan pendidikan berkualitas. Donasi Anda akan membantu menyediakan buku, seragam, dan fasilitas belajar yang layak.",
    imageUrl: "https://placehold.co/1200x500.png",
    imageHint: "children education",
    goal: 50000000,
    raised: 23500000,
  },
  {
    id: 2,
    title: "Air Bersih untuk Desa Terpencil",
    description: "Akses air bersih adalah hak dasar. Dukung kami membangun sumur dan instalasi air bersih untuk masyarakat yang membutuhkan.",
    imageUrl: "https://placehold.co/1200x500.png",
    imageHint: "clean water",
    goal: 75000000,
    raised: 45000000,
  },
];

export default function FeaturedCampaigns() {
  const featuredCampaign = campaigns[0];

  return (
    <section id="featured-campaigns" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">Kampanye Unggulan Donasia.com</h2>
        <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={featuredCampaign.imageUrl}
                alt={featuredCampaign.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={featuredCampaign.imageHint}
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl lg:text-3xl font-semibold text-primary">{featuredCampaign.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2 text-base">{featuredCampaign.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-foreground mb-1">
                    <span>Terkumpul: Rp {featuredCampaign.raised.toLocaleString('id-ID')}</span>
                    <span>Target: Rp {featuredCampaign.goal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className="bg-accent h-2.5 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${(featuredCampaign.raised / featuredCampaign.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto transition-transform duration-300 group-hover:translate-x-1">
                  <Link href={`/donate?campaign=${featuredCampaign.id}`}>
                    Donasi Sekarang <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>

        {campaigns.length > 1 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.slice(1).map(campaign => (
              <Card key={campaign.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                   <Image
                    src={campaign.imageUrl.replace("1200x500", "600x400")} 
                    alt={campaign.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                    data-ai-hint={campaign.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{campaign.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-3">{campaign.description}</p>
                   <div className="text-xs text-foreground mb-1">
                    Rp {campaign.raised.toLocaleString('id-ID')} / Rp {campaign.goal.toLocaleString('id-ID')}
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-accent h-1.5 rounded-full" 
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary/10">
                    <Link href={`/donate?campaign=${campaign.id}`}>Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
