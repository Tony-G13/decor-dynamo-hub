import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Armchair, 
  Users, 
  Shield, 
  CheckCircle, 
  Clock,
  Star
} from "lucide-react";

const ExtendedService = () => {
  const services = [
    {
      icon: Armchair,
      title: "Аренда мебели",
      description: "Современная мебель для любых мероприятий",
      features: ["Дизайнерская мебель", "Доставка и сборка", "Различные стили"],
      price: "от 1 500 ₽/день"
    },
    {
      icon: Users,
      title: "Сопровождение на площадке",
      description: "Профессиональная поддержка во время мероприятия",
      features: ["Контроль качества", "Оперативное решение проблем", "Координация команды"],
      price: "от 3 000 ₽/день"
    },
    {
      icon: Shield,
      title: "Получение допусков",
      description: "Все необходимые разрешения и документы",
      features: ["Согласование с администрацией", "Пожарные разрешения", "Техническая документация"],
      price: "от 5 000 ₽"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Расширенный сервис
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Дополнительные услуги для комплексного решения ваших задач
            </p>
            <Button size="lg" variant="hero">
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Почему выбирают наш сервис</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Экономия времени</h3>
              <p className="text-muted-foreground">Берем на себя все организационные вопросы</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Высокое качество</h3>
              <p className="text-muted-foreground">Профессиональный подход к каждой детали</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Гарантия результата</h3>
              <p className="text-muted-foreground">Полная ответственность за качество услуг</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtendedService;