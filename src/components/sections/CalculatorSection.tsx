import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const CalculatorSection = () => {
  const [area, setArea] = useState([25]);
  const [serviceType, setServiceType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [estimate, setEstimate] = useState(0);

  const calculateEstimate = () => {
    let basePrice = area[0] * 3000; // базовая цена за м²
    
    // Коэффициенты по типу услуги
    const serviceMultipliers = {
      "photozone": 1,
      "decorations": 1.3,
      "props": 0.8,
      "stands": 2,
      "set-design": 2.5
    };
    
    // Коэффициенты по срокам
    const timelineMultipliers = {
      "urgent": 1.5,
      "standard": 1,
      "extended": 0.8
    };
    
    if (serviceType && timeline) {
      basePrice *= serviceMultipliers[serviceType] * timelineMultipliers[timeline];
      setEstimate(Math.round(basePrice));
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Калькулятор стоимости</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Получите предварительную оценку стоимости вашего проекта за несколько кликов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center text-2xl">
                <Calculator className="h-6 w-6 mr-2 text-primary" />
                Расчет стоимости проекта
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Площадь */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Площадь оформления</Label>
                  <div className="px-4">
                    <Slider
                      value={area}
                      onValueChange={setArea}
                      max={200}
                      min={5}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>5 м²</span>
                      <span className="font-medium text-primary">{area[0]} м²</span>
                      <span>200+ м²</span>
                    </div>
                  </div>
                </div>

                {/* Тип услуги */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Тип услуги</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип услуги" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="photozone">Фотозоны</SelectItem>
                      <SelectItem value="decorations">Декорации</SelectItem>
                      <SelectItem value="props">Бутафория</SelectItem>
                      <SelectItem value="stands">Выставочные стенды</SelectItem>
                      <SelectItem value="set-design">Сет-дизайн</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Сроки */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Сроки реализации</Label>
                  <Select value={timeline} onValueChange={setTimeline}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите сроки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Срочно (3-5 дней) +50%</SelectItem>
                      <SelectItem value="standard">Стандарт (7-14 дней)</SelectItem>
                      <SelectItem value="extended">Не горит (от 3 недель) -20%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Результат */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Предварительная стоимость</Label>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    {estimate > 0 ? (
                      <>
                        <div className="text-3xl font-bold text-primary mb-2">
                          {estimate.toLocaleString()} ₽
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Итоговая цена может отличаться
                        </div>
                      </>
                    ) : (
                      <div className="text-muted-foreground">
                        Заполните все поля для расчета
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button 
                  onClick={calculateEstimate}
                  disabled={!serviceType || !timeline}
                  variant="hero" 
                  size="lg"
                  className="px-8"
                >
                  Рассчитать стоимость
                </Button>
                
                {estimate > 0 && (
                  <div className="animate-fade-in">
                    <Button variant="outline" size="lg" className="ml-4">
                      Получить точную смету
                    </Button>
                  </div>
                )}
              </div>

              <div className="text-center text-sm text-muted-foreground">
                * Расчет является предварительным. Точная стоимость определяется после изучения технического задания
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;