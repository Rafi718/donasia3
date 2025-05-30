export default function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground py-8 text-center mt-auto border-t">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Atapkita.com. Semua Hak Cipta Dilindungi.
        </p>
        <p className="text-xs mt-1">
          Dibangun dengan ❤️ untuk kebaikan.
        </p>
      </div>
    </footer>
  );
}
