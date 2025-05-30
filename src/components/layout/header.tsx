import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/#featured-campaigns", label: "Kampanye" },
    { href: "/#donation-tiers", label: "Tingkat Donasi" },
    { href: "/#impact-statistics", label: "Statistik" },
    { href: "/#story-generator", label: "Pembuat Cerita" },
  ];

  return (
    <header className="bg-primary/80 text-primary-foreground shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
          <HeartHandshake className="h-7 w-7 text-accent" />
          <span>Charity Hub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300">
            <Link href="/donate">Donasi Sekarang</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-[250px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu Utama</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Button key={item.label} variant="ghost" asChild className="text-foreground hover:bg-secondary w-full justify-start text-lg">
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 w-full text-lg">
                  <Link href="/donate">Donasi Sekarang</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
