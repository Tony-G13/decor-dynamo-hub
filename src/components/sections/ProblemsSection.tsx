import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import problemSolution from "@/assets/problem-solution.png";

const ProblemsSection = () => {
  const problems = [
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
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Graphics */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <img src={problemSolution} alt="Problem Solution" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-5">
        <CheckCircle2 className="w-full h-full text-primary" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Решаем ваши задачи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Знаем типичные проблемы и предлагаем конкретные решения
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-destructive mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-3" />
                    Проблема:
                  </h3>
                  <p className="text-muted-foreground pl-7">{item.problem}</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-primary mb-2 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-3" />
                    Наше решение:
                  </h3>
                  <p className="pl-7 group-hover:text-foreground transition-colors">{item.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;