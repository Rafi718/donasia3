import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GalangDanaPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">Mulai Galang Dana di Donasia.com</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Halaman ini sedang dalam pengembangan. Segera hadir fitur untuk Anda memulai kampanye penggalangan dana sendiri bersama Donasia.com.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}
