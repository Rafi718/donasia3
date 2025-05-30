
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import NavigationLoadingToast from '@/components/layout/navigation-loading-toast'; // Added import

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Donasia.com - Galang Dana dan Donasi Online Terpercaya',
  description: 'Platform galang dana dan donasi online. Bersama Donasia.com, wujudkan perubahan positif.',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" id="top">
      <body className={cn(geistSans.variable, geistMono.variable, "antialiased flex flex-col min-b-screen bg-background")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <NavigationLoadingToast /> {/* Added component here */}
      </body>
    </html>
  );
}
