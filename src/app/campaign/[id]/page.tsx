
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Tag, MapPin, Bookmark, Share2, MoreHorizontal, ArrowLeft, UserCircle2 } from 'lucide-react'; 
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { id as localeId } from 'date-fns/locale';

// Mock data - In a real app, this would be fetched based on params.id
const mockCampaignsData: { [key: string]: CampaignDetail } = {
  '1': {
    id: '1',
    title: "Bantu Reyhan Pulih Bisa Melihat Bicara Dan Jalan",
    imageUrl: "https://images.unsplash.com/photo-1516020034232-764e0078e398?ixlib=rb-4.0.3&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1lZGljYWwlMjBjYXJlfGVufDB8fHx8MTczOTY2NTg3MXww&fit=crop&w=1200&h=500&q=80",
    imageHint: "child medical care",
    views: 3891,
    category: "Kesehatan",
    location: "Jambi",
    storySummary: "Reyhan mengalami buta sejak Februari 2024, serta mengalami, bisu dan lumpuh sejak Oktober 2024 akibat pembengkakan pada otak nya.",
    fullStory: "Reyhan adalah seorang anak yang ceria dan penuh semangat. Namun, sejak Februari 2024, pandangannya mulai kabur dan akhirnya ia tidak bisa melihat. Tak berhenti di situ, pada Oktober 2024, ia mengalami pembengkakan pada otak yang menyebabkannya menjadi bisu dan lumpuh.\n\nKeluarga Reyhan telah berupaya semaksimal mungkin untuk pengobatannya, namun biaya yang dibutuhkan sangat besar. Saat ini, Reyhan membutuhkan serangkaian terapi dan perawatan intensif agar bisa kembali melihat, berbicara, dan berjalan. Uluran tangan Anda sangat berarti untuk masa depan Reyhan.",
    raised: 3681405,
    goal: 272000000,
    endDate: "2024-12-31", 
    organizer: {
      name: "Aina Hernita",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGxhY2Vob2xkZXJ8ZW58MHx8fHwxNzM5NjY2MzIwfDA&fit=crop&w=100&h=100&q=80",
      avatarHint: "profile woman"
    },
    news: [
      { id: 'n1', title: "Kondisi Reyhan Membaik", date: "2024-09-15", content: "Setelah mendapatkan perawatan awal, kondisi Reyhan menunjukkan sedikit perbaikan..." },
      { id: 'n2', title: "Penggalangan Dana Mencapai Target Awal", date: "2024-09-01", content: "Terima kasih kepada para donatur, target awal penggalangan dana telah tercapai..." }
    ],
    donors: [
      { id: 'd1', name: "Hamba Allah", amount: 500000, date: "2024-09-20", isAnonymous: true },
      { id: 'd2', name: "Budi Santoso", amount: 250000, date: "2024-09-18", isAnonymous: false },
      { id: 'd3', name: "Siti Aminah", amount: 100000, date: "2024-09-17", isAnonymous: false },
    ]
  },
  // Add other mock campaigns here if needed, matching IDs from popular-campaigns.tsx
};

type CampaignDetail = {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  views: number;
  category: string;
  location: string;
  storySummary: string;
  fullStory: string;
  raised: number;
  goal: number;
  endDate: string;
  organizer: {
    name: string;
    avatarUrl?: string;
    avatarHint?: string;
  };
  news: Array<{ id: string; title: string; date: string; content: string }>;
  donors: Array<{ id: string; name: string; amount: number; date: string; isAnonymous: boolean }>;
};

export default function CampaignDetailPage() {
  const params = useParams();
  const campaignId = typeof params.id === 'string' ? params.id : '';
  const campaign = mockCampaignsData[campaignId];

  if (!campaign) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="text-2xl font-bold text-destructive">Kampanye tidak ditemukan.</h1>
        <Button asChild variant="link" className="mt-4">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    );
  }

  const daysLeft = formatDistanceToNowStrict(parseISO(campaign.endDate), { addSuffix: true, locale: localeId });
  const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <div className="bg-muted/20 dark:bg-background">
      <div className="container mx-auto px-2 sm:px-4 py-8 md:py-12">
        <Button variant="outline" size="sm" asChild className="mb-6">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
            </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column / Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden shadow-lg">
              <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
                <Image
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={campaign.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">{campaign.title}</h1>
                <div className="flex flex-wrap gap-2 items-center mb-4 text-sm text-muted-foreground">
                  <Badge variant="outline" className="py-1 px-2">
                    <Eye className="mr-1.5 h-4 w-4" /> {campaign.views.toLocaleString('id-ID')} Dilihat
                  </Badge>
                  <Badge variant="outline" className="py-1 px-2 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700">
                    <Tag className="mr-1.5 h-4 w-4" /> {campaign.category}
                  </Badge>
                  <Badge variant="outline" className="py-1 px-2">
                    <MapPin className="mr-1.5 h-4 w-4" /> {campaign.location}
                  </Badge>
                  <div className="ml-auto flex gap-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Bookmark className="h-5 w-5" />
                        <span className="sr-only">Simpan</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Share2 className="h-5 w-5" />
                        <span className="sr-only">Bagikan</span>
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{campaign.storySummary}</p>

                <Tabs defaultValue="kisah" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="kisah">Kisah</TabsTrigger>
                    <TabsTrigger value="berita">Berita ({campaign.news.length})</TabsTrigger>
                    <TabsTrigger value="donatur">Donatur ({campaign.donors.length})</TabsTrigger>
                  </TabsList>
                  <TabsContent value="kisah" className="prose dark:prose-invert max-w-none text-foreground">
                    <p className="whitespace-pre-line">{campaign.fullStory}</p>
                  </TabsContent>
                  <TabsContent value="berita">
                    <CardDescription>Berita terbaru akan ditampilkan di sini.</CardDescription>
                     <div className="space-y-4 mt-4">
                        {campaign.news.map(item => (
                            <div key={item.id} className="p-3 border rounded-md bg-background/50">
                                <h4 className="font-semibold text-primary">{item.title}</h4>
                                <p className="text-xs text-muted-foreground mb-1">{new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
                                <p className="text-sm text-foreground">{item.content}</p>
                            </div>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="donatur">
                    <CardDescription>Daftar donatur (yang tidak anonim) akan ditampilkan di sini.</CardDescription>
                     <div className="space-y-2 mt-4">
                        {campaign.donors.filter(d => !d.isAnonymous).slice(0, 5).map(donor => ( // Show first 5 non-anonymous
                            <div key={donor.id} className="flex justify-between items-center p-2 border-b text-sm">
                                <span className="text-foreground">{donor.name}</span>
                                <span className="text-accent font-semibold">Rp {donor.amount.toLocaleString('id-ID')}</span>
                            </div>
                        ))}
                        {campaign.donors.filter(d => !d.isAnonymous).length > 5 && <p className="text-xs text-center text-muted-foreground">dan {campaign.donors.filter(d => !d.isAnonymous).length - 5} donatur lainnya...</p>}
                        {campaign.donors.filter(d => d.isAnonymous).length > 0 && <p className="text-xs text-center text-muted-foreground mt-2">{campaign.donors.filter(d => d.isAnonymous).length} donatur anonim.</p>}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column / Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Rp {campaign.raised.toLocaleString('id-ID')}</CardTitle>
                <CardDescription>
                  Terkumpul dari target <span className="font-semibold text-foreground">Rp {campaign.goal.toLocaleString('id-ID')}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="h-3 mb-3 rounded-full bg-muted" indicatorClassName="bg-accent"/>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{progressPercentage.toFixed(0)}%</span>
                  <span>{daysLeft.replace('tersisa','lagi')}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  Donasi Otomatis (Segera Hadir)
                </Button>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3" asChild>
                  <Link href={`/donate?campaign=${campaign.id}`}>Donasi Sekarang</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Penggalang Dana</CardTitle>
                <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Opsi</span>
                </Button>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  {campaign.organizer.avatarUrl ? <AvatarImage src={campaign.organizer.avatarUrl} alt={campaign.organizer.name} data-ai-hint={campaign.organizer.avatarHint} /> : null}
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {campaign.organizer.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{campaign.organizer.name}</p>
                  <p className="text-xs text-muted-foreground">Terverifikasi</p> {/* Placeholder */}
                </div>
              </CardContent>
            </Card>
            {/* Placeholder for share buttons or other widgets */}
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="text-lg">Bagikan Kampanye Ini</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-2">
                    <Button variant="outline" className="flex-1">Facebook</Button>
                    <Button variant="outline" className="flex-1">Twitter</Button>
                    <Button variant="outline" className="flex-1">WhatsApp</Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

    
