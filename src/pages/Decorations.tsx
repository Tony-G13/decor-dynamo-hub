import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Theater, Building, Calendar, Camera } from "lucide-react";

const Decorations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Декорации за <span className="text-primary">10 дней</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Создаем театральные декорации, сценические конструкции и праздничное оформление
            </p>
            <Button variant="default" size="lg">
              Получить расчет декораций
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Для кого создаем декорации</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Theater,
                  title: "Театры",
                  description: "Сценические декорации для спектаклей и представлений"
                },
                {
                  icon: Building,
                  title: "Event-площадки",
                  description: "Тематическое оформление залов и открытых пространств"
                },
                {
                  icon: Calendar,
                  title: "Праздничные мероприятия",
                  description: "Декорации для корпоративов, свадеб и частных событий"
                },
                {
                  icon: Camera,
                  title: "Съемочные площадки",
                  description: "Декорации для фото- и видеосъемок, рекламы"
                }
              ].map((item, index) => (
                <Card key={item.title} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Портфолио декораций</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Декорации "Лес"</h3>
                    <p className="text-sm text-muted-foreground mb-2">Театр им. Маяковского • 40 м²</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">180 000 ₽</span>
                      <span className="text-xs text-muted-foreground">7 дней</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Стоимость декораций</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Простые",
                  price: "30-100",
                  description: "Базовые декорации, стандартные материалы",
                  features: ["Простые формы", "Стандартные материалы", "Базовая покраска"]
                },
                {
                  name: "Сложные",
                  price: "100-250", 
                  description: "Многоуровневые конструкции, спецэффекты",
                  features: ["Сложная геометрия", "Специальные материалы", "Подсветка", "Механизмы"],
                  popular: true
                },
                {
                  name: "Уникальные",
                  price: "250-500",
                  description: "Авторские декорации с интерактивными элементами",
                  features: ["Авторский дизайн", "Интерактивные элементы", "Мультимедиа", "Автоматизация"]
                }
              ].map((pkg) => (
                <Card key={pkg.name} className={`${pkg.popular ? 'border-2 border-primary shadow-primary' : ''} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="text-3xl font-bold text-primary pt-4">
                      {pkg.price} <span className="text-base text-muted-foreground">тыс. ₽</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="text-sm flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Заказать расчет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Создадим декорации для вашего проекта</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Получите расчет стоимости и 3D-визуализацию за 48 часов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Получить расчет
              </Button>
              <Button variant="outline" size="lg">
                WhatsApp / Telegram
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Decorations;