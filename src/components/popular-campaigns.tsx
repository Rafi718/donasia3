
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserCircle2 } from 'lucide-react'; // Changed from UserCircle2 to UserCircle2

type Campaign = {
  id: number;
  title: string;
  category: string;
  categoryColor: string; // Tailwind CSS class for background, e.g., 'bg-orange-100 text-orange-700'
  imageUrl: string;
  imageHint: string;
  goal: number;
  raised: number;
  daysLeft: number;
  organizer: string;
  organizerAvatar?: string;
};

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Bantu Reyhan Pulih Bisa Melihat Bicara Dan Jalan",
    category: "Kesehatan",
    categoryColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "child medical care",
    goal: 50000000,
    raised: 3681405,
    daysLeft: 79,
    organizer: "Aina Hernita",
  },
  {
    id: 2,
    title: "Tolong Bantu Anak Yatim Piatu Di Panti Asuhan",
    category: "Panti Sosial",
    categoryColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "orphanage children",
    goal: 10000000,
    raised: 729000,
    daysLeft: 31,
    organizer: "Yayasan Idaman Kasih",
  },
  {
    id: 3,
    title: "Seribu Harapan Untuk Anak-anak Panti Asuhan",
    category: "Panti Sosial",
    categoryColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "children hope",
    goal: 20000000,
    raised: 1208126,
    daysLeft: 93,
    organizer: "Panti Asuhan Sinar...",
  },
  {
    id: 4,
    title: "Tempat Tinggal Panti Asuhan Jernih Balaki Di...",
    category: "Panti Sosial",
    categoryColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "orphanage building",
    goal: 5000000,
    raised: 48098,
    daysLeft: 5,
    organizer: "Yayasan Panti Asuhan...",
  },
  {
    id: 5,
    title: "Sedekah untuk Pendidikan Anak Dhuafa",
    category: "Sedekah",
    categoryColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "education charity",
    goal: 15000000,
    raised: 8500000,
    daysLeft: 45,
    organizer: "Komunitas Peduli Anak",
  },
  {
    id: 6,
    title: "Zakat Maal untuk Kesejahteraan Umat",
    category: "Lainnya",
    categoryColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "zakat charity",
    goal: 100000000,
    raised: 65000000,
    daysLeft: 20,
    organizer: "Lembaga Amil Zakat",
  },
];

export default function PopularCampaigns() {
  return (
    <section id="popular-campaigns" className="py-12 md:py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Bantu Mereka</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Campaign Populer</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Mereka butuh uluran tangan kita. Karena sedikit bantuan dari kita adalah harapan besar bagi mereka.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border bg-card">
              <div className="relative aspect-[4/3] w-full">
                <Link href={`/campaign/${campaign.id}`} passHref>
                  <Image
                    src={campaign.imageUrl}
                    alt={campaign.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl cursor-pointer"
                    data-ai-hint={campaign.imageHint}
                  />
                </Link>
                <Badge variant="secondary" className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-md border-0 ${campaign.categoryColor}`}>
                  {campaign.category}
                </Badge>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base font-semibold text-foreground leading-tight line-clamp-2 h-10">
                  <Link href={`/campaign/${campaign.id}`} className="hover:text-primary transition-colors">
                    {campaign.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2 mb-3 rounded-full bg-muted" indicatorClassName="bg-accent" />
                <div className="flex justify-between text-xs text-muted-foreground mb-3">
                  <div>
                    <p className="font-semibold text-sm text-foreground">Rp {campaign.raised.toLocaleString('id-ID')}</p>
                    <p>Terkumpul</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm text-foreground">{campaign.daysLeft}</p>
                    <p>Hari Lagi</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 border-t mt-auto">
                <div className="flex items-center gap-2 text-xs text-muted-foreground w-full">
                  <Avatar className="h-6 w-6">
                    {campaign.organizerAvatar ? <AvatarImage src={campaign.organizerAvatar} alt={campaign.organizer} /> : null}
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      <UserCircle2 size={16} />
                    </AvatarFallback>
                  </Avatar>
                  <span className="truncate">{campaign.organizer}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                {/* This link should probably go to a page that lists ALL campaigns, not the general donate page */}
                <Link href="/donate">Lihat Semua Campaign</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

    