"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/useAuth";

const DonasiaIcon = () => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-7 md:h-6 md:w-8"
  >
    <path
      d="M3.33301 10.0003C3.33301 9.53364 3.71634 9.15031 4.18301 9.15031H10.1849C10.7867 9.15031 11.3429 8.73887 11.5391 8.17964L13.2391 3.25314C13.6266 2.13678 15.0399 2.13678 15.4274 3.25314L17.1274 8.17964C17.3236 8.73887 17.8798 9.15031 18.4816 9.15031H20.6663C21.133 9.15031 21.5163 9.53364 21.5163 10.0003V13.3336C21.5163 14.2591 20.7588 15.0166 19.8333 15.0166H5.83301C4.90754 15.0166 4.14967 14.2591 4.14967 13.3336V10.0003Z"
      fill="hsl(var(--primary))"
    />
    <circle cx="14.333" cy="12.3336" r="3.33333" fill="#FFD700" />
  </svg>
);

export default function Header() {
  const { user, loading } = useAuth();
  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/donate", label: "Donasi" },
    { href: "/galang-dana", label: "Galang Dana" },
    { href: "/download", label: "Download App" },
    { href: "/tentang-kami", label: "Tentang Kami" },
  ];

  if (loading) {
    return null; // Atau tampilkan loading state jika diperlukan
  }

  // Ambil avatar URL atau gunakan fallback
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture || '';
  const userName = user?.user_metadata?.full_name || user?.email || "Profil";
  const userInitial = userName.charAt(0).toUpperCase(); // Ambil inisial untuk fallback

  return (
    <header className="bg-background text-foreground shadow-sm sticky top-0 z-50 border-b">
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
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className="text-foreground hover:bg-muted/50 hover:text-primary px-2 lg:px-3"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md h-9 w-9 md:h-10 md:w-10"
          >
            <Search className="h-4 w-4 md:h-5 md:w-5" />
            <span className="sr-only">Cari</span>
          </Button>

          {user ? (
            // Jika user sudah login, tampilkan hanya avatar
            <Button
              asChild
              className="hidden md:inline-flex items-center bg-transparent text-primary-foreground hover:bg-primary/10 rounded-full p-1"
            >
              <Link href="/profile" className="flex items-center">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Profile"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium">
                    {userInitial}
                  </div>
                )}
              </Link>
            </Button>
          ) : (
            // Jika user belum login, tampilkan tombol Login
            <Button
              asChild
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 md:px-6 py-2 text-sm md:text-base"
            >
              <Link href="/login">Login</Link>
            </Button>
          )}

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background w-[250px] sm:w-[300px]"
              >
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
                    <Button
                      key={item.label}
                      variant="ghost"
                      asChild
                      className="text-foreground hover:bg-muted/50 hover:text-primary w-full justify-start text-base py-2.5 px-3"
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                  {user ? (
                    <Button
                      asChild
                      className="bg-transparent text-primary-foreground hover:bg-primary/10 w-full text-base py-2 mt-4 flex items-center"
                    >
                      <Link href="/profile" className="flex items-center">
                        {avatarUrl ? (
                          <img
                            src={avatarUrl}
                            alt="Profile"
                            className="h-20 w-20 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium">
                            {userInitial}
                          </div>
                        )}
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-base py-2.5 mt-4"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}