import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, PenTool, Eye, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Обсуждение",
    description: "Изучаем ваше ТЗ, задаем вопросы, предлагаем решения"
  },
  {
    icon: PenTool,
    number: "02", 
    title: "Проектирование",
    description: "Создаем концепцию, чертежи и детальную смету"
  },
  {
    icon: Eye,
    number: "03",
    title: "Визуализация",
    description: "Показываем 3D-модель будущего проекта для утверждения"
  },
  {
    icon: Hammer,
    number: "04",
    title: "Производство",
    description: "Изготавливаем конструкции в собственной мастерской"
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Монтаж",
    description: "Устанавливаем и сдаем объект точно в срок"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Как мы работаем</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Проверенный процесс от идеи до готового результата за 5 простых шагов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connection Lines with Animation */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-30">
            <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
          </div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card 
                className="text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border-0 animate-scale-in hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  {/* Step Number with Pulse Animation */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-125 transition-all duration-300 group-hover:animate-pulse">
                    {step.number}
                  </div>
                  
                  {/* Floating Animation for Icon */}
                  <div className="mt-4 mb-6 group-hover:animate-bounce">
                    <step.icon className="h-12 w-12 mx-auto text-primary group-hover:scale-110 transition-all duration-300 group-hover:text-secondary" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-muted h-1 rounded overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 group-hover:w-full"
                      style={{ 
                        width: '20%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <span>Средний срок реализации:</span>
            <span className="font-bold text-primary text-xl">7-14 дней</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;