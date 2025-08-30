import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Компания */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">EventDecor</h3>
            <p className="text-background/80 mb-4">
              Создаем впечатляющие пространства для ваших мероприятий
            </p>
            <Button variant="outline" size="sm" className="border-background/30 text-background hover:bg-background/10">
              О компании
            </Button>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Услуги</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/photozones" className="hover:text-background transition-colors">Фотозоны</a></li>
              <li><a href="/decorations" className="hover:text-background transition-colors">Декорации</a></li>
              <li><a href="/props" className="hover:text-background transition-colors">Бутафория</a></li>
              <li><a href="/stands" className="hover:text-background transition-colors">Выставочные стенды</a></li>
              <li><a href="/set-design" className="hover:text-background transition-colors">Сет-дизайн</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Контакты</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@eventdecor.ru</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>

          {/* График */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">График работы</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <div>
                  <div>Пн-Пт: 9:00 — 21:00</div>
                  <div>Сб-Вс: 10:00 — 18:00</div>
                  <div className="text-primary font-medium">Срочные заявки: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <div>
              © 2024 EventDecor. Все права защищены.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-background transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;