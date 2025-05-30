import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md text-center shadow-xl border">
        <CardHeader>
          <div className="mx-auto mb-4 p-4 bg-accent/20 rounded-full inline-block">
            <Gift className="h-12 w-12 text-accent" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Halaman Donasi</CardTitle>
          <CardDescription className="text-muted-foreground">
            Terima kasih atas niat baik Anda untuk berdonasi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-foreground">
            Saat ini, halaman donasi sedang dalam pengembangan. Kami akan segera menghadirkannya untuk Anda.
          </p>
          <p className="mb-6 text-foreground">
            Untuk informasi lebih lanjut atau jika Anda ingin berdonasi melalui metode lain, silakan hubungi kami di <a href="mailto:info@atapkita.com" className="text-primary hover:underline">info@atapkita.com</a>.
          </p>
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
