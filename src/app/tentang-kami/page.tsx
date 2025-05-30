import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function TentangKamiPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-200px)]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Tentang Kami</h1>
        <Image 
          src="https://placehold.co/800x400.png" 
          alt="Tim Atapkita" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-xl mb-8 object-cover"
          data-ai-hint="team collaboration" 
        />
        <p className="text-lg text-muted-foreground mb-4">
          Atapkita.com adalah platform yang didedikasikan untuk menghubungkan kebaikan hati para donatur dengan mereka yang membutuhkan. Kami percaya bahwa setiap individu memiliki kekuatan untuk membuat perubahan positif, sekecil apapun kontribusinya.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Visi kami adalah menciptakan ekosistem gotong royong digital yang transparan, aman, dan mudah diakses, sehingga setiap orang dapat berpartisipasi dalam membangun masa depan yang lebih baik.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Misi kami adalah menyediakan sarana penggalangan dana dan donasi online yang inovatif, memberdayakan individu dan organisasi sosial, serta memastikan setiap bantuan sampai kepada yang berhak.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </div>
  );
}
