export default function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-8 text-center mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Charity Hub. Semua Hak Cipta Dilindungi.
        </p>
        <p className="text-xs mt-1">
          Dibangun dengan ❤️ untuk kebaikan.
        </p>
      </div>
    </footer>
  );
}
