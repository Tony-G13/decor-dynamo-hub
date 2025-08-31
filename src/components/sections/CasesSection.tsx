import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, MapPin } from "lucide-react";
import casePhotozone from "@/assets/case-photozone.jpg";
import caseCorporate from "@/assets/case-corporate.jpg";
import caseExhibition from "@/assets/case-exhibition.jpg";

const cases = [
  {
    title: "Фотозона в ТЦ «Афимолл»",
    description: "Установили интерактивную фотозону с брендингом за 2 дня",
    visitors: "12 000",
    duration: "2 дня",
    location: "Москва",
    result: "посетителей за месяц",
    image: casePhotozone
  },
  {
    title: "Корпоратив Mail.Ru Group",
    description: "Полное оформление новогоднего корпоратива для 500 сотрудников",
    visitors: "500",
    duration: "5 дней", 
    location: "Москва",
    result: "довольных гостей",
    image: caseCorporate
  },
  {
    title: "Выставочный стенд на CPM",
    description: "Двухэтажный стенд для крупного бренда косметики",
    visitors: "8 000",
    duration: "3 дня",
    location: "Москва",
    result: "посетителей стенда",
    image: caseExhibition
  }
];

const CasesSection = () => {
  return (
    <section className="py-20 relative">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-20 16c8.8 0 16-7.2 16-16S28.8 4 20 4 4 11.2 4 20s7.2 16 16 16z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши кейсы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные проекты с конкретными результатами и отзывами клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={caseItem.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {caseItem.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-primary mr-2" />
                    <span className="font-semibold text-primary text-lg">{caseItem.visitors}</span>
                    <span className="ml-1 text-muted-foreground">{caseItem.result}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-secondary mr-2" />
                    <span>Срок монтажа: <strong>{caseItem.duration}</strong></span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-tertiary mr-2" />
                    <span>{caseItem.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;