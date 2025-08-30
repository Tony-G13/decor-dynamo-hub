import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Cog, Star, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Аккредитация",
    description: "Аккредитация на всех ведущих выставочных площадках Москвы",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Скорость работы",
    description: "3D‑дизайн за 48 часов и быстрая визуализация этапов",
    color: "text-tertiary"
  },
  {
    icon: Cog,
    title: "Полный цикл",
    description: "Все в одном: проектирование, производство, логистика и монтаж",
    color: "text-secondary"
  },
  {
    icon: Star,
    title: "Собственное производство",
    description: "Собственное производство без посредников",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Команда",
    description: "Логистика и монтаж — команда 150+ человек",
    color: "text-tertiary"
  },
  {
    icon: Shield,
    title: "Фиксированная смета",
    description: "Фиксированная смета в договоре — никаких сюрпризов",
    color: "text-secondary"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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