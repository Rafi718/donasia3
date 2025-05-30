
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Ensure Label is imported if used traditionally
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Gift, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const donationFormSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus terdiri dari minimal 2 karakter.' }).max(100),
  email: z.string().email({ message: 'Format email tidak valid.' }),
  amount: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        const num = parseFloat(val.replace(/[^0-9.-]+/g,""));
        return isNaN(num) ? undefined : num;
      }
      return val;
    },
    z.number({ required_error: "Jumlah donasi harus diisi."}).positive({ message: 'Jumlah donasi harus lebih dari 0.' })
  ),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

export default function DonatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [campaignId, setCampaignId] = useState<string | null>(null);
  const [initialAmount, setInitialAmount] = useState<number | null>(null);

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      amount: undefined,
    },
  });

  useEffect(() => {
    const campaignQuery = searchParams.get('campaign');
    const amountQuery = searchParams.get('amount');

    if (campaignQuery) {
      setCampaignId(campaignQuery);
    }

    if (amountQuery) {
      const parsedAmount = parseInt(amountQuery, 10);
      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        setInitialAmount(parsedAmount);
        form.setValue('amount', parsedAmount);
      }
    }
  }, [searchParams, form]);

  const onSubmit: SubmitHandler<DonationFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast({
      title: 'Donasi Berhasil (Simulasi)!',
      description: (
        <div>
          <p>Terima kasih, {data.name}, atas donasi Anda sebesar Rp {data.amount.toLocaleString('id-ID')}.</p>
          {campaignId && <p>Untuk kampanye ID: {campaignId}</p>}
          <p className="text-xs mt-2">Ini adalah simulasi. Tidak ada transaksi nyata yang terjadi.</p>
        </div>
      ),
      variant: 'default',
      duration: 5000,
    });

    form.reset();
    // Redirect to home page after a short delay to allow toast visibility
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-lg text-left shadow-xl border">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/20 rounded-full inline-block">
                <Gift className="h-8 w-8 text-accent" />
              </div>
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Formulir Donasi</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Setiap kontribusi Anda sangat berarti.
                </CardDescription>
              </div>
            </div>
          </div>
           {campaignId && (
            <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
              Anda berdonasi untuk Kampanye ID: <span className="font-semibold text-primary">{campaignId}</span>
            </p>
          )}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama Anda" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@contoh.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jumlah Donasi (Rp)</FormLabel>
                    <FormControl>
                       <Input 
                        type="number" 
                        placeholder="Contoh: 50000" 
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
                    <FormDescription>
                      Masukkan jumlah donasi yang Anda inginkan.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <p className="text-xs text-muted-foreground text-center pt-2">
                Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan Donasia.com.
                Ini adalah simulasi dan tidak ada transaksi nyata yang akan diproses.
              </p>

              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Memproses Donasi...
                  </>
                ) : (
                  "Donasi Sekarang (Simulasi)"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button variant="outline" asChild className="w-full mt-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
