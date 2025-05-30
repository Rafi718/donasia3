
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ShieldCheck, LayoutDashboard } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-2xl text-center shadow-xl border">
        <CardHeader>
          <div className="mx-auto p-3 bg-primary/10 rounded-full inline-block mb-4">
            <LayoutDashboard className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary">Admin Dashboard Donasia.com</CardTitle>
          <CardDescription className="text-muted-foreground">
            Selamat datang di area admin. Dari sini Anda dapat mengelola berbagai aspek situs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Fitur admin spesifik (seperti manajemen kampanye, pengguna, dll.) dapat ditambahkan di sini.
          </p>
          <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-md text-destructive dark:text-red-400">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={20} />
              <p className="font-semibold">Peringatan Keamanan</p>
            </div>
            <p className="text-sm mt-1">
              Halaman ini saat ini tidak dilindungi. Implementasikan autentikasi dan otorisasi sebelum digunakan di lingkungan produksi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="w-full">
              Kelola Kampanye (Placeholder)
            </Button>
            <Button variant="outline" className="w-full">
              Kelola Pengguna (Placeholder)
            </Button>
            <Button variant="outline" className="w-full">
              Pengaturan Situs (Placeholder)
            </Button>
            <Button variant="outline" className="w-full">
              Lihat Laporan (Placeholder)
            </Button>
          </div>

        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button asChild className="w-full max-w-xs bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
