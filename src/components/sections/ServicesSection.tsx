import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, Palette, Shapes, Building, Film, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "Фотозоны",
    description: "Инстаграмные фотозоны для ТЦ, корпоративов и мероприятий",
    price: "от 50 000 ₽",
    link: "/photozones",
    gradient: "from-primary to-tertiary"
  },
  {
    icon: Palette,
    title: "Декорации",
    description: "Тематические декорации и праздничное оформление",
    price: "от 80 000 ₽", 
    link: "/decorations",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Shapes,
    title: "Бутафория",
    description: "Реквизит и бутафория для съемок и мероприятий",
    price: "от 30 000 ₽",
    link: "/props",
    gradient: "from-tertiary to-secondary"
  },
  {
    icon: Building,
    title: "Выставочные стенды",
    description: "Стенды для выставок и презентаций брендов",
    price: "от 120 000 ₽",
    link: "/stands", 
    gradient: "from-primary to-secondary"
  },
  {
    icon: Film,
    title: "Сет-дизайн",
    description: "Дизайн съемочных площадок и студийных локаций",
    price: "от 200 000 ₽",
    link: "/set-design",
    gradient: "from-secondary to-tertiary"
  },
  {
    icon: Settings,
    title: "Расширенный сервис",
    description: "Аренда мебели, сопровождение на площадке, допуски",
    price: "от 15 000 ₽",
    link: "/extended-service",
    gradient: "from-tertiary to-primary"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл работ: от концепции и 3D-визуализации до монтажа и демонтажа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground">за проект</span>
                </div>
                <Link to={service.link}>
                  <Button className="w-full group-hover:bg-primary/90">
                    Подробнее
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Нужна консультация? Обсудим ваш проект
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;