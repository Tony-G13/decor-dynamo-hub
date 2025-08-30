import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Film, Camera, Theater, Building } from "lucide-react";

const Props = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Бутафория за <span className="text-primary">7 дней</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Изготавливаем реквизит, бутафорию и предметы интерьера для съемок и театра
            </p>
            <Button variant="default" size="lg">
              Получить расчет бутафории
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Для кого создаем бутафорию</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Film,
                  title: "Киностудии",
                  description: "Реквизит для фильмов, сериалов и рекламных роликов"
                },
                {
                  icon: Camera,
                  title: "Фотостудии",
                  description: "Предметы интерьера и аксессуары для фотосессий"
                },
                {
                  icon: Theater,
                  title: "Театры",
                  description: "Театральный реквизит и бутафория для спектаклей"
                },
                {
                  icon: Building,
                  title: "Музеи",
                  description: "Экспонаты, макеты и интерактивные инсталляции"
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
            <h2 className="text-4xl font-bold text-center mb-16">Портфолио бутафории</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Винтажная мебель</h3>
                    <p className="text-sm text-muted-foreground mb-2">Фотостудия • Комплект 15 предметов</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">120 000 ₽</span>
                      <span className="text-xs text-muted-foreground">5 дней</span>
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
            <h2 className="text-4xl font-bold text-center mb-16">Стоимость бутафории</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Простая",
                  price: "5-25",
                  description: "Мелкий реквизит, простые предметы",
                  features: ["Простые формы", "Базовые материалы", "Стандартная покраска"]
                },
                {
                  name: "Средняя",
                  price: "25-75", 
                  description: "Мебель, сложные предметы интерьера",
                  features: ["Качественные материалы", "Детальная проработка", "Спецэффекты", "Патинирование"],
                  popular: true
                },
                {
                  name: "Сложная",
                  price: "75-200",
                  description: "Уникальные предметы с механизмами",
                  features: ["Эксклюзивный дизайн", "Движущиеся части", "Электроника", "Ручная работа"]
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
            <h2 className="text-4xl font-bold mb-6">Создадим бутафорию для вашего проекта</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Получите расчет стоимости и эскизы за 24 часа
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

export default Props;