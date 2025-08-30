import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download } from "lucide-react";

const packages = [
  {
    name: "Базовый",
    size: "S",
    price: "50-150",
    description: "Для небольших мероприятий",
    features: [
      "Фотозона до 10 м²",
      "Простые декорации",
      "Монтаж за 1-2 дня",
      "Базовая подсветка",
      "Демонтаж включен"
    ],
    popular: false
  },
  {
    name: "Стандарт",
    size: "M", 
    price: "150-400",
    description: "Для корпоративов и выставок",
    features: [
      "Комплексное оформление до 50 м²",
      "3D-визуализация",
      "Профессиональная подсветка",
      "Интерактивные элементы",
      "Брендинг заказчика",
      "Монтаж за 3-5 дней"
    ],
    popular: true
  },
  {
    name: "Премиум",
    size: "L",
    price: "400-1000",
    description: "Для масштабных проектов",
    features: [
      "Полное оформление от 50 м²",
      "Уникальный дизайн-проект",
      "Сложные конструкции",
      "Мультимедиа интеграция", 
      "Персональный менеджер",
      "Круглосуточный монтаж"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Сколько стоит</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Прозрачные пакеты с фиксированной стоимостью. Без скрытых доплат
          </p>
          <Button variant="outline" className="mb-8">
            <Download className="h-4 w-4 mr-2" />
            Скачать пример сметы (PDF)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'border-2 border-primary shadow-primary' : 'border-0'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                    pkg.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  } text-2xl font-bold`}>
                    {pkg.size}
                  </div>
                </div>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">тыс. ₽</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Получить расчет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Нужен индивидуальный расчет?
          </p>
          <Button variant="hero" size="lg">
            Запросить персональную смету
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;