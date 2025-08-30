import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Gift, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Gift className="h-12 w-12 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold">Получите бонус</h2>
            </div>
            <p className="text-xl mb-2">
              Оставьте заявку и получите 3D-визуализацию <span className="font-bold">бесплатно</span>
            </p>
            <p className="text-white/80">
              Увидите результат до начала работ. Обычная стоимость — 15 000 ₽
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Форма */}
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Как к вам обращаться?" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact">Телефон или Email</Label>
                    <Input id="contact" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="project">Опишите ваш проект</Label>
                    <Textarea 
                      id="project" 
                      placeholder="Какой тип мероприятия, площадь, сроки, особые пожелания..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Получить 3D-визуализацию бесплатно
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Быстрые контакты */}
            <div className="space-y-6 animate-slide-up">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Или свяжитесь прямо сейчас</h3>
                <p className="text-white/80 mb-6">
                  Ответим на вопросы и дадим консультацию в удобном формате
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 justify-start"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  +7 (495) 123-45-67
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 justify-start"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp / Telegram
                </Button>
              </div>

              <div className="bg-white/10 rounded-lg p-6 text-white">
                <h4 className="font-semibold mb-3">График работы:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span>9:00 — 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб-Вс:</span>
                    <span>10:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between font-medium text-primary">
                    <span>Срочные заявки:</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;