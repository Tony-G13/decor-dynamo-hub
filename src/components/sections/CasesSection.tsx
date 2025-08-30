import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, MapPin } from "lucide-react";

const cases = [
  {
    title: "Фотозона в ТЦ «Афимолл»",
    description: "Установили интерактивную фотозону с брендингом за 2 дня",
    visitors: "12 000",
    duration: "2 дня",
    location: "Москва",
    result: "посетителей за месяц"
  },
  {
    title: "Корпоратив Mail.Ru Group",
    description: "Полное оформление новогоднего корпоратива для 500 сотрудников",
    visitors: "500",
    duration: "5 дней", 
    location: "Москва",
    result: "довольных гостей"
  },
  {
    title: "Выставочный стенд на CPM",
    description: "Двухэтажный стенд для крупного бренда косметики",
    visitors: "8 000",
    duration: "3 дня",
    location: "Москва",
    result: "посетителей стенда"
  }
];

const CasesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
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
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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