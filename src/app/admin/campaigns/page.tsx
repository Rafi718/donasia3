
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { PlusCircle, Edit, Trash2, ArrowLeft } from 'lucide-react';

type AdminCampaign = {
  id: string;
  title: string;
  category: string;
  goal: number;
  raised: number;
  status: 'Aktif' | 'Selesai' | 'Draf';
  endDate: string; // Store as string for simplicity in mock data
};

// Mock data for campaigns
const mockCampaigns: AdminCampaign[] = [
  { id: '1', title: 'Bantu Pendidikan Anak Pedalaman', category: 'Pendidikan', goal: 50000000, raised: 23500000, status: 'Aktif', endDate: '2024-12-31' },
  { id: '2', title: 'Air Bersih untuk Desa Terpencil', category: 'Infrastruktur', goal: 75000000, raised: 75000000, status: 'Selesai', endDate: '2024-06-30' },
  { id: '3', title: 'Makanan untuk Korban Banjir', category: 'Bencana Alam', goal: 25000000, raised: 10000000, status: 'Aktif', endDate: '2024-10-15' },
  { id: '4', title: 'Operasi Jantung Adik Budi', category: 'Kesehatan', goal: 100000000, raised: 0, status: 'Draf', endDate: '2025-01-31' },
];

export default function AdminCampaignsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-160px)]">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <Button variant="outline" size="sm" asChild className="mb-4">
            <Link href="/admin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Dashboard Admin
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-primary">Kelola Kampanye Donasia.com</h1>
          <p className="text-muted-foreground">Lihat, tambah, edit, atau hapus kampanye.</p>
        </div>
        <Button asChild>
          <Link href="/admin/campaigns/new">
            <PlusCircle className="mr-2 h-5 w-5" />
            Tambah Kampanye Baru
          </Link>
        </Button>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Daftar Kampanye</CardTitle>
          <CardDescription>Total {mockCampaigns.length} kampanye ditemukan.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead className="text-right">Target (Rp)</TableHead>
                <TableHead className="text-right">Terkumpul (Rp)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tanggal Selesai</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.title}</TableCell>
                  <TableCell>{campaign.category}</TableCell>
                  <TableCell className="text-right">{campaign.goal.toLocaleString('id-ID')}</TableCell>
                  <TableCell className="text-right">{campaign.raised.toLocaleString('id-ID')}</TableCell>
                  <TableCell>
                    <Badge variant={campaign.status === 'Aktif' ? 'default' : campaign.status === 'Selesai' ? 'secondary' : 'outline'}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(campaign.endDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="hover:text-primary" title="Edit">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-destructive" title="Hapus">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
