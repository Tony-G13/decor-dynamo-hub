import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, DollarSign, Wrench } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Смета за 24 часа",
    description: "Получите детальный расчет стоимости в течение суток после обращения",
    color: "text-primary"
  },
  {
    icon: Eye,
    title: "3D-визуализация бесплатно",
    description: "Увидите результат до начала работ. Фотореалистичная визуализация входит в стоимость",
    color: "text-tertiary"
  },
  {
    icon: DollarSign,
    title: "Фиксированная цена в договоре",
    description: "Цена не изменится в процессе работы. Все риски берем на себя",
    color: "text-secondary"
  },
  {
    icon: Wrench,
    title: "Монтаж в срок, 24/7",
    description: "Работаем круглосуточно для соблюдения дедлайнов. Гарантия своевременной сдачи",
    color: "text-primary"
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы делаем процесс создания декораций максимально прозрачным и предсказуемым
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <feature.icon className={`h-16 w-16 mx-auto ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;