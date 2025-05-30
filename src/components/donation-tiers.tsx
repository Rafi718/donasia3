import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, HandHeart, ShieldCheck, Smile } from 'lucide-react';
import Link from 'next/link';

const donationTiers = [
  {
    id: 1,
    title: "Sahabat Kebaikan",
    amount: 50000,
    impact: "Menyediakan 5 porsi makanan bergizi untuk anak yatim.",
    icon: <Gift className="h-10 w-10 text-accent" />,
    bgColorClass: "bg-green-50 dark:bg-green-900/20", // Adjusted for dark mode
  },
  {
    id: 2,
    title: "Pejuang Harapan",
    amount: 150000,
    impact: "Memberikan 1 paket buku dan alat tulis untuk siswa kurang mampu.",
    icon: <HandHeart className="h-10 w-10 text-accent" />,
    bgColorClass: "bg-blue-50 dark:bg-blue-900/20", // Adjusted for dark mode
  },
  {
    id: 3,
    title: "Pahlawan Perubahan",
    amount: 500000,
    impact: "Membantu biaya operasional 1 hari untuk rumah singgah.",
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    bgColorClass: "bg-yellow-50 dark:bg-yellow-900/20", // Adjusted for dark mode
  },
   {
    id: 4,
    title: "Malaikat Pelindung",
    amount: 1000000,
    impact: "Memberikan beasiswa pendidikan selama 1 bulan untuk 1 anak.",
    icon: <Smile className="h-10 w-10 text-accent" />,
    bgColorClass: "bg-purple-50 dark:bg-purple-900/20", // Adjusted for dark mode
  },
];

export default function DonationTiers() {
  return (
    <section id="donation-tiers" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">Pilih Tingkatan Donasi Anda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {donationTiers.map((tier) => (
            <Card key={tier.id} className={`shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${tier.bgColorClass}`}>
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/20 rounded-full inline-block mb-3">
                  {tier.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{tier.title}</CardTitle>
                <CardDescription className="font-bold text-2xl text-accent">
                  Rp {tier.amount.toLocaleString('id-ID')}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground text-sm">{tier.impact}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={`/donate?amount=${tier.amount}`}>Donasi Rp {tier.amount.toLocaleString('id-ID')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 animate-pulse">
                <Link href="/donate">Donasi Dengan Jumlah Lain</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
