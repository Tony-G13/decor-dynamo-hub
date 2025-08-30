import { Card } from "@/components/ui/card";

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Решаем ваши задачи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Знаем типичные проблемы и предлагаем конкретные решения
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-destructive mb-2 flex items-center">
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                    Проблема:
                  </h3>
                  <p className="text-muted-foreground pl-5">{item.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Наше решение:
                  </h3>
                  <p className="pl-5">{item.solution}</p>
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