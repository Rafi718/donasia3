
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Info, Users } from 'lucide-react';
import PopularCampaigns from '@/components/popular-campaigns'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (

    
    <div className="flex flex-col min-h-[calc(100vh-var(--header-height,80px))]"> {/* Adjust header height if necessary */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 flex-grow">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider mb-2">
              Galang Dana dan Donasi Online Terpercaya
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground leading-tight">
              Bersama <span className="text-primary whitespace-nowrap">Donasia.com</span> Wujudkan Perubahan Positif
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg">
              Galang dana dan donasi online kini semakin mudah dilakukan dimanapun dan kapanpun untuk mereka yang membutuhkan.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg py-3 px-8 shadow-md rounded-lg mb-8 transition-transform hover:scale-105">
              <Link href="/donate">
                Donasi Sekarang
              </Link>
            </Button>
            
            <div className="mt-4">
              <p className="text-sm font-medium text-foreground mb-3">Download Aplikasi Donasia</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/download" aria-label="Get it on Google Play">
                  <Image src="https://placehold.co/135x40.png?text=Google+Play" alt="Google Play" width={135} height={40} className="rounded" data-ai-hint="google play store" />
                </Link>
                <Link href="/download" aria-label="Download on the App Store">
                  <Image src="https://placehold.co/135x40.png?text=App+Store" alt="App Store" width={135} height={40} className="rounded" data-ai-hint="apple app store" />
                </Link>
                <Link href="/download" aria-label="Explore it on AppGallery">
                  <Image src="https://placehold.co/135x40.png?text=AppGallery" alt="AppGallery" width={135} height={40} className="rounded" data-ai-hint="huawei appgallery" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="relative h-[400px] md:h-[550px] lg:h-[600px] order-first md:order-last">
            {/* Main Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[280px] lg:w-[320px] h-auto z-10">
              <Image
                src="https://placehold.co/400x600.png"
                alt="Anak tersenyum menerima bantuan"
                width={400}
                height={600}
                className="rounded-3xl shadow-2xl object-cover aspect-[2/3]"
                priority
                data-ai-hint="child smiling donation"
              />
            </div>
            {/* Top smaller image */}
            <div className="absolute top-[10%] left-[5%] md:top-[5%] md:left-0 w-[45%] md:w-[200px] lg:w-[240px] h-auto">
              <Image
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb25hdGlvbnxlbnwwfHx8fDE3NDg2MDQ0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Relawan membantu sesama"
                width={300}
                height={200}
                className="rounded-3xl shadow-xl object-cover aspect-[3/2]"
                data-ai-hint="volunteers helping"
              />
            </div>
             {/* Bottom smaller image */}
            <div className="absolute bottom-[5%] right-[5%] md:bottom-[10%] md:right-0 w-[55%] md:w-[260px] lg:w-[300px] h-auto">
              <Image
                src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkb25hdGlvbnxlbnwwfHx8fDE3NDg2MDQ0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Komunitas bergotong royong"
                width={400}
                height={250}
                className="rounded-3xl shadow-xl object-cover aspect-[16/10]"
                data-ai-hint="community working together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Campaigns Section */}
      <PopularCampaigns />

      {/* About Us Section */}
      <section id="about-us-home" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-last md:order-first">
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Tim Donasia.com berdiskusi" 
                width={600} 
                height={450} 
                className="rounded-xl shadow-xl object-cover w-full"
                data-ai-hint="team discussion"
              />
            </div>
            <div className="flex flex-col items-start text-left">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">Tentang Kami</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Mengenal <span className="text-primary">Donasia.com</span> Lebih Dekat
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Donasia.com adalah platform yang menghubungkan kebaikan hati para donatur dengan mereka yang membutuhkan. Kami percaya setiap individu memiliki kekuatan untuk membuat perubahan positif, sekecil apapun kontribusinya.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Visi kami adalah menciptakan ekosistem gotong royong digital yang transparan, aman, dan mudah diakses.
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg py-3 px-8 shadow-md rounded-lg transition-transform hover:scale-105">
                <Link href="/tentang-kami">
                  Baca Selengkapnya <Info className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
      </section>


      


      {/* Scroll to Top Button */}
      <Link href="#top" className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50">
        <ArrowUp className="h-6 w-6" />
        <span className="sr-only">Scroll to top</span>
      </Link>
    </div>
  );
}
