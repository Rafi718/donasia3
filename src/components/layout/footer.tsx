import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const DonasiaIconSmall = () => (
  <svg width="24" height="18" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
    <path d="M3.33301 10.0003C3.33301 9.53364 3.71634 9.15031 4.18301 9.15031H10.1849C10.7867 9.15031 11.3429 8.73887 11.5391 8.17964L13.2391 3.25314C13.6266 2.13678 15.0399 2.13678 15.4274 3.25314L17.1274 8.17964C17.3236 8.73887 17.8798 9.15031 18.4816 9.15031H20.6663C21.133 9.15031 21.5163 9.53364 21.5163 10.0003V13.3336C21.5163 14.2591 20.7588 15.0166 19.8333 15.0166H5.83301C4.90754 15.0166 4.14967 14.2591 4.14967 13.3336V10.0003Z" fill="hsl(var(--primary))"/>
    <circle cx="14.333" cy="12.3336" r="3.33333" fill="#FFD700"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-12 mt-auto border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <DonasiaIconSmall />
              <span className="text-lg font-bold text-foreground">
                <span className="text-primary">donasia</span>
                <span className="text-primary/80">.com</span>
              </span>
            </Link>
            <p className="text-sm">
              Platform galang dana dan donasi online terpercaya untuk perubahan yang lebih baik.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tentang-kami" className="hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-primary">Karir</Link></li>
              <li><Link href="#" className="hover:text-primary">Kontak</Link></li>
              <li><Link href="#" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-primary">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
              <Link href="#" aria-label="Youtube" className="text-muted-foreground hover:text-primary"><Youtube size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Donasia.com. Semua Hak Cipta Dilindungi.
          </p>
          <p className="text-xs mt-1">
            Dibangun dengan ❤️ untuk kebaikan bersama.
          </p>
        </div>
      </div>
    </footer>
  );
}
