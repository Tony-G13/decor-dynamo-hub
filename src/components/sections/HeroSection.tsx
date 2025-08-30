import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg-expo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6">
            НОВЫЙ СЕЗОН
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
            Фотозоны, декорации и стенды{" "}
            <span className="text-primary">под ключ</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-white/90">
            Смета за 24 часа
          </div>

          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            Без сюрпризов в цене. От эскиза до монтажа. 
            Создаем впечатляющие пространства для ваших мероприятий.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Получить смету за 24 часа
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Посмотреть кейсы
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center animate-scale-in">
              <h3 className="text-lg font-semibold mb-2">Быстро</h3>
              <p className="text-white/80">Смета за 24 часа, монтаж от 2 дней</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in">
              <h3 className="text-lg font-semibold mb-2">Надежно</h3>
              <p className="text-white/80">Фиксированная цена в договоре</p>
            </div>
            <div className="flex flex-col items-center animate-scale-in">
              <h3 className="text-lg font-semibold mb-2">Под ключ</h3>
              <p className="text-white/80">От идеи до готового результата</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;