import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Search } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

const DonasiaIcon = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-7 md:h-6 md:w-8">
    <path d="M3.33301 10.0003C3.33301 9.53364 3.71634 9.15031 4.18301 9.15031H10.1849C10.7867 9.15031 11.3429 8.73887 11.5391 8.17964L13.2391 3.25314C13.6266 2.13678 15.0399 2.13678 15.4274 3.25314L17.1274 8.17964C17.3236 8.73887 17.8798 9.15031 18.4816 9.15031H20.6663C21.133 9.15031 21.5163 9.53364 21.5163 10.0003V13.3336C21.5163 14.2591 20.7588 15.0166 19.8333 15.0166H5.83301C4.90754 15.0166 4.14967 14.2591 4.14967 13.3336V10.0003Z" fill="hsl(var(--primary))"/>
    <circle cx="14.333" cy="12.3336" r="3.33333" fill="#FFD700"/>
  </svg>
);


export default function Header() {
  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/donate", label: "Donasi" },
    { href: "/galang-dana", label: "Galang Dana" },
    { href: "/download", label: "Download App" },
    { href: "/tentang-kami", label: "Tentang Kami" },
  ];

  return (
    
    <header className="bg-background text-foreground shadow-sm sticky top-0 z-50 border-b">
       {/* <div className="bg-indigo-600">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8">
                <div className="flex gap-x-4">
                    <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                        </svg>
                    </div>
                    <p className="py-2 font-medium">
                    Oops! Website ini masih kita kembangin. Tungguin, ya!  <a href="javascript:(0)" className="font-semibold underline duration-150 hover:text-indigo-100">Kontak</a>
                    </p>
                </div>
                <button className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
        </div> */}
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <DonasiaIcon />
          <span className="text-xl md:text-2xl font-bold">
            <span className="text-primary">donasia</span>
            <span className="text-primary/80">.com</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="text-foreground hover:bg-muted/50 hover:text-primary px-2 lg:px-3">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md h-9 w-9 md:h-10 md:w-10">
            <Search className="h-4 w-4 md:h-5 md:w-5" />
            <span className="sr-only">Cari</span>
          </Button>
          <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 md:px-6 py-2 text-sm md:text-base">
            <Link href="/masuk">Masuk</Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-[250px] sm:w-[300px]">
                <SheetHeader className="mb-6 border-b pb-4">
                   <Link href="/" className="flex items-center gap-2 mb-2">
                    <DonasiaIcon />
                    <span className="text-xl font-bold">
                      <span className="text-primary">donasia</span>
                      <span className="text-primary/80">.com</span>
                    </span>
                  </Link>
                  <SheetTitle className="sr-only">Menu Utama</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Button key={item.label} variant="ghost" asChild className="text-foreground hover:bg-muted/50 hover:text-primary w-full justify-start text-base py-2.5 px-3">
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-base py-2.5 mt-4">
                    <Link href="/masuk">Masuk</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
