'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { generateDonationStory, type GenerateDonationStoryOutput } from '@/ai/flows/generate-donation-story';
import { Wand2, Copy, Check, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  facts: z.string().min(10, { message: "Mohon masukkan setidaknya 10 karakter fakta." }).max(500, { message: "Fakta tidak boleh lebih dari 500 karakter." }),
});

type FormData = z.infer<typeof formSchema>;

export default function StoryGenerator() {
  const [generatedStories, setGeneratedStories] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedStoryIndex, setCopiedStoryIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facts: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedStories(null);
    try {
      const result: GenerateDonationStoryOutput = await generateDonationStory({ facts: data.facts });
      if (result.stories && result.stories.length > 0) {
        setGeneratedStories(result.stories);
        toast({
          title: "Cerita berhasil dibuat!",
          description: "Pilih cerita yang paling Anda sukai.",
          variant: "default",
        });
      } else {
        toast({
          title: "Gagal membuat cerita",
          description: "Tidak ada cerita yang dihasilkan. Coba lagi dengan fakta yang berbeda.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error generating story:", error);
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal membuat cerita. Mohon coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = (storyText: string, index: number) => {
    navigator.clipboard.writeText(storyText).then(() => {
      setCopiedStoryIndex(index);
      toast({
        title: "Tersalin!",
        description: "Cerita telah disalin ke clipboard.",
      });
      setTimeout(() => setCopiedStoryIndex(null), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Gagal menyalin",
        description: "Tidak dapat menyalin cerita. Coba lagi.",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="story-generator" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-xl border">
          <CardHeader className="text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-3 mx-auto">
             <Wand2 className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Pembuat Cerita Donasi</CardTitle>
            <CardDescription className="text-muted-foreground">
              Buat narasi kampanye yang menarik dengan bantuan AI. Masukkan beberapa fakta kunci, dan kami akan hasilkan cerita untuk Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="facts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-foreground">Fakta Kampanye</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Contoh: Kami ingin mengumpulkan dana untuk membeli 100 selimut bagi korban banjir di desa X. Bantuan ini sangat mendesak karena musim dingin akan tiba."
                          className="min-h-[120px] resize-none focus:ring-accent focus:border-accent bg-background border-border text-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Membuat Cerita...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Buat Cerita Sekarang
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          {generatedStories && (
            <CardFooter className="flex flex-col gap-4 pt-6">
              <h3 className="text-xl font-semibold text-primary">Hasil Cerita:</h3>
              {generatedStories.map((story, index) => (
                <Alert key={index} variant="default" className="bg-muted/50 relative group border-border">
                   <Wand2 className="h-5 w-5 text-accent" />
                  <AlertTitle className="font-medium text-primary">Opsi Cerita {index + 1}</AlertTitle>
                  <AlertDescription className="text-foreground whitespace-pre-wrap">
                    {story}
                  </AlertDescription>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                    onClick={() => handleCopyToClipboard(story, index)}
                    aria-label="Salin cerita"
                  >
                    {copiedStoryIndex === index ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </Alert>
              ))}
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
