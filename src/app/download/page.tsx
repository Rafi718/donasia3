import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary">Download Aplikasi Atapkita</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
        Dapatkan kemudahan berdonasi dan menggalang dana langsung dari genggaman Anda. Unduh aplikasi Atapkita sekarang!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="#" aria-label="Get it on Google Play">
          <Image src="https://placehold.co/180x60.png?text=Google+Play" alt="Google Play" width={180} height={60} className="rounded-lg shadow-md hover:opacity-90 transition-opacity" data-ai-hint="google play store" />
        </Link>
        <Link href="#" aria-label="Download on the App Store">
          <Image src="https://placehold.co/180x60.png?text=App+Store" alt="App Store" width={180} height={60} className="rounded-lg shadow-md hover:opacity-90 transition-opacity" data-ai-hint="apple app store" />
        </Link>
        <Link href="#" aria-label="Explore it on AppGallery">
          <Image src="https://placehold.co/180x60.png?text=AppGallery" alt="AppGallery" width={180} height={60} className="rounded-lg shadow-md hover:opacity-90 transition-opacity" data-ai-hint="huawei appgallery" />
        </Link>
      </div>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  );
}
