
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CalendarIcon, ArrowLeft, Save } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';


const campaignCategories = [
  "Kesehatan", "Panti Sosial", "Pendidikan", "Bencana Alam", "Infrastruktur", "Lingkungan", "Hewan", "Lainnya"
];

const newCampaignFormSchema = z.object({
  title: z.string().min(5, { message: 'Judul kampanye minimal 5 karakter.' }).max(100, { message: 'Judul kampanye maksimal 100 karakter.' }),
  description: z.string().min(20, { message: 'Deskripsi kampanye minimal 20 karakter.' }).max(2000, { message: 'Deskripsi kampanye maksimal 2000 karakter.' }),
  category: z.string({ required_error: 'Kategori kampanye harus dipilih.' }),
  goal: z.preprocess(
    (val) => (typeof val === 'string' ? parseFloat(val.replace(/[^0-9.-]+/g, "")) : val),
    z.number({ required_error: "Target dana harus diisi." }).positive({ message: 'Target dana harus lebih dari 0.' })
  ),
  endDate: z.date({ required_error: 'Tanggal selesai kampanye harus diisi.' }),
  imageUrl: z.string().url({ message: 'URL gambar tidak valid.' }).min(1, {message: 'URL Gambar harus diisi'}),
  organizerName: z.string().min(3, { message: 'Nama penyelenggara minimal 3 karakter.' }).max(50, {message: 'Nama penyelenggara maksimal 50 karakter.'}),
});

type NewCampaignFormValues = z.infer<typeof newCampaignFormSchema>;

export default function NewCampaignPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<NewCampaignFormValues>({
    resolver: zodResolver(newCampaignFormSchema),
    defaultValues: {
      title: '',
      description: '',
      category: undefined,
      goal: undefined,
      endDate: undefined,
      imageUrl: '',
      organizerName: '',
    },
  });

  const onSubmit: SubmitHandler<NewCampaignFormValues> = async (data) => {
    // Simulate API call / saving data
    console.log("Data Kampanye Baru:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Kampanye Berhasil Dibuat (Simulasi)!',
      description: `Kampanye "${data.title}" telah berhasil ditambahkan.`,
      variant: 'default',
    });

    form.reset();
    // Optionally redirect to campaigns list
    router.push('/admin/campaigns');
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-160px)]">
       <Button variant="outline" size="sm" asChild className="mb-6">
        <Link href="/admin/campaigns">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Daftar Kampanye
        </Link>
      </Button>
      <Card className="w-full max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">Tambah Kampanye Baru</CardTitle>
          <CardDescription>
            Isi detail kampanye baru di bawah ini.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Kampanye</FormLabel>
                    <FormControl>
                      <Input placeholder="Contoh: Bantu Sekolah Anak Pedalaman" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi Kampanye</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Jelaskan detail dan tujuan kampanye Anda..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="organizerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Penyelenggara</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Anda atau Organisasi Anda" {...field} />
                    </FormControl>
                     <FormDescription>Nama yang akan ditampilkan sebagai pembuat kampanye.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kategori Kampanye</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {campaignCategories.map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Dana (Rp)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="Contoh: 50000000" 
                          {...field} 
                          onChange={(e) => {
                            const value = e.target.value;
                             // Allow only numbers for direct input, then zod handles parsing for submission
                            if (/^\d*$/.test(value)) {
                                field.onChange(value === '' ? undefined : parseFloat(value));
                            }
                          }}
                          value={field.value === undefined ? '' : String(field.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Gambar Kampanye</FormLabel>
                    <FormControl>
                      <Input placeholder="https://contoh.com/gambar.jpg" {...field} />
                    </FormControl>
                    <FormDescription>Gunakan URL gambar yang tersedia secara publik.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Tanggal Selesai Kampanye</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: id })
                            ) : (
                              <span>Pilih tanggal</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0,0,0,0)) // Disable past dates
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full md:w-auto" disabled={form.formState.isSubmitting}>
                <Save className="mr-2 h-5 w-5" />
                {form.formState.isSubmitting ? "Menyimpan..." : "Simpan Kampanye"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
