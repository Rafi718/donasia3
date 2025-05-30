import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, Target, Heart } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: "10,000+",
    label: "Jiwa Terbantu",
    icon: <Users className="h-8 w-8 text-primary" />,
    description: "Lebih dari sepuluh ribu individu telah merasakan manfaat langsung dari donasi Anda.",
  },
  {
    id: 2,
    value: "Rp 1.5 M+",
    label: "Dana Terkumpul",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    description: "Total dana yang berhasil kami kumpulkan dan salurkan untuk berbagai program kemanusiaan.",
  },
  {
    id: 3,
    value: "200+",
    label: "Proyek Sukses",
    icon: <Target className="h-8 w-8 text-primary" />,
    description: "Ratusan proyek telah berhasil diselesaikan, membawa perubahan nyata bagi komunitas.",
  },
  {
    id: 4,
    value: "95%",
    label: "Efisiensi Donasi",
    icon: <Heart className="h-8 w-8 text-primary" />,
    description: "Mayoritas donasi Anda langsung disalurkan ke penerima manfaat, minim biaya operasional.",
  }
];

export default function ImpactStatistics() {
  return (
    <section id="impact-statistics" className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">Dampak Nyata Donasi Anda</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <CardHeader className="items-center pb-2">
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-primary mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
