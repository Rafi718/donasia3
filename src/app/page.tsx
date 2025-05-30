import FeaturedCampaigns from '@/components/featured-campaigns';
import DonationTiers from '@/components/donation-tiers';
import StoryGenerator from '@/components/story-generator';
import ImpactStatistics from '@/components/impact-statistics';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Gift } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-gradient-to-br from-primary/30 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Gift className="h-16 w-16 text-accent mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary">
              Ulurkan Tangan, Sebarkan Harapan
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-10">
              Bersama Charity Hub, setiap donasi Anda membawa perubahan nyata. Mari bantu mereka yang membutuhkan dan ciptakan dampak positif berkelanjutan.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3 px-8 shadow-lg transition-transform hover:scale-105 duration-300">
              <Link href="/donate">
                Donasi Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 relative w-full max-w-4xl mx-auto h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/1000x600.png"
              alt="Kegiatan amal"
              fill
              style={{objectFit: 'cover'}}
              priority
              data-ai-hint="community help"
              className="transform transition-all duration-500 hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl md:text-3xl font-semibold p-4 bg-black/50 rounded">Membangun Masa Depan Lebih Baik, Bersama.</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedCampaigns />
      <DonationTiers />
      <ImpactStatistics />
      <StoryGenerator />

      {/* Final Call to Action Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siapapun Bisa Jadi Pahlawan</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Sekecil apapun donasi Anda, akan sangat berarti bagi mereka. Bergabunglah dengan ribuan donatur lainnya dan jadilah bagian dari perubahan.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3 px-8 shadow-lg transition-transform hover:scale-105 duration-300">
            <Link href="/donate">
              Mulai Berdonasi <Gift className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
