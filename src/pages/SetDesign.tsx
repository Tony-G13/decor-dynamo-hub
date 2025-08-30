import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Camera, Film, Tv, Music } from "lucide-react";

const SetDesign = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Сет-дизайн за <span className="text-primary">12 дней</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Создаем сценографию для ТВ-шоу, клипов, рекламы и digital-проектов
            </p>
            <Button variant="default" size="lg">
              Получить расчет сет-дизайна
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Для кого создаем сет-дизайн</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Tv,
                  title: "ТВ-каналы",
                  description: "Декорации для ток-шоу, новостных программ и передач"
                },
                {
                  icon: Film,
                  title: "Кино и реклама",
                  description: "Съемочные павильоны для фильмов и рекламных роликов"
                },
                {
                  icon: Music,
                  title: "Музыкальная индустрия",
                  description: "Сценография для клипов, концертов и музыкальных шоу"
                },
                {
                  icon: Camera,
                  title: "Digital-агентства",
                  description: "Контент для социальных сетей и онлайн-платформ"
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
            <h2 className="text-4xl font-bold text-center mb-16">Портфолио сет-дизайна</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Студия "Утро России"</h3>
                    <p className="text-sm text-muted-foreground mb-2">Первый канал • 80 м²</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">1 200 000 ₽</span>
                      <span className="text-xs text-muted-foreground">10 дней</span>
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
            <h2 className="text-4xl font-bold text-center mb-16">Стоимость сет-дизайна</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Digital",
                  price: "100-300",
                  description: "Для съемок контента и клипов",
                  features: ["Мобильные конструкции", "LED-подсветка", "Быстрая сборка", "Компактный размер"]
                },
                {
                  name: "ТВ-студия",
                  price: "300-800", 
                  description: "Для телевизионных программ",
                  features: ["Стационарные декорации", "Профессиональное освещение", "Звукоизоляция", "Камерные планы"],
                  popular: true
                },
                {
                  name: "Киноплощадка",
                  price: "800-2500",
                  description: "Для фильмов и масштабных проектов",
                  features: ["Многоуровневые конструкции", "Кинематографическое качество", "Спецэффекты", "Полная кастомизация"]
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
            <h2 className="text-4xl font-bold mb-6">Создадим сет-дизайн для вашего проекта</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Получите концепцию и расчет стоимости за 48 часов
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

export default SetDesign;