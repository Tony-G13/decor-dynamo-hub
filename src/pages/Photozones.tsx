import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Building, Calendar, Camera } from "lucide-react";

const Photozones = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Фотозоны за <span className="text-primary">14 дней</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Создаем инстаграмные фотозоны для торговых центров, корпоративов и мероприятий
            </p>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Получить расчет фотозоны
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Для кого создаем фотозоны</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Building,
                  title: "Торговые центры",
                  description: "Привлекаем посетителей и увеличиваем время пребывания в ТЦ"
                },
                {
                  icon: Users,
                  title: "Корпоративы",
                  description: "Создаем memorable моменты для сотрудников компаний"
                },
                {
                  icon: Calendar,
                  title: "Event-агентства",
                  description: "Помогаем реализовать креативные идеи клиентов"
                },
                {
                  icon: Camera,
                  title: "Продюсеры",
                  description: "Оформляем съемочные площадки и студии"
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

        {/* Pain Points */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Решаем ваши задачи</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  problem: "Фотозона не привлекает посетителей",
                  solution: "Создаем уникальный дизайн с учетом трендов Instagram и поведения аудитории"
                },
                {
                  problem: "Превышение бюджета и сроков",
                  solution: "Фиксированная цена в договоре и четкие сроки реализации проекта"
                },
                {
                  problem: "Сложности с монтажом в ТЦ",
                  solution: "Имеем все разрешения и опыт работы в торговых центрах Москвы"
                },
                {
                  problem: "Результат не соответствует ожиданиям",
                  solution: "3D-визуализация проекта перед началом производства"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Проблема:</h3>
                      <p className="text-muted-foreground mb-4">{item.problem}</p>
                      <h3 className="font-semibold text-primary mb-2">Наше решение:</h3>
                      <p>{item.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Портфолио фотозон</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Фотозона "Космос"</h3>
                    <p className="text-sm text-muted-foreground mb-2">ТЦ Афимолл • 25 м²</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">250 000 ₽</span>
                      <span className="text-xs text-muted-foreground">5 дней</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Смотреть все проекты
              </Button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Как создаем фотозоны</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Бриф",
                  description: "Изучаем целевую аудиторию и задачи проекта"
                },
                {
                  step: "02", 
                  title: "Концепт",
                  description: "Создаем уникальную концепцию и настроение"
                },
                {
                  step: "03",
                  title: "3D-модель",
                  description: "Показываем фотореалистичную визуализацию"
                },
                {
                  step: "04",
                  title: "Производство",
                  description: "Изготавливаем элементы в мастерской"
                },
                {
                  step: "05",
                  title: "Монтаж",
                  description: "Устанавливаем и тестируем фотозону"
                }
              ].map((step, index) => (
                <Card key={step.step} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Стоимость фотозон</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Простая",
                  price: "50-150",
                  description: "До 10 м², базовые материалы",
                  features: ["Простая конструкция", "Стандартные материалы", "Базовая подсветка"]
                },
                {
                  name: "Стандарт",
                  price: "150-300", 
                  description: "10-25 м², качественные материалы",
                  features: ["Сложная геометрия", "Премиум материалы", "LED-подсветка", "Интерактивные элементы"],
                  popular: true
                },
                {
                  name: "Премиум",
                  price: "300-600",
                  description: "25+ м², уникальный дизайн",
                  features: ["Авторский дизайн", "Мультимедиа", "Сценарное освещение", "Звуковое оформление"]
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
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Создадим фотозону вашей мечты</h2>
            <p className="text-xl mb-8 text-white/90">
              Получите расчет стоимости и 3D-визуализацию за 24 часа
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Получить расчет
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
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

export default Photozones;