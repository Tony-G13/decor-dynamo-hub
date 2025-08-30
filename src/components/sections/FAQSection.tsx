import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Сколько времени занимает изготовление фотозоны?",
      answer: "Стандартная фотозона изготавливается за 7-14 дней в зависимости от сложности. Простые конструкции можем сделать за 3-5 дней."
    },
    {
      question: "Предоставляете ли вы 3D-визуализацию?",
      answer: "Да, 3D-визуализация входит в стоимость проекта. Вы увидите, как будет выглядеть фотозона еще до начала производства."
    },
    {
      question: "Можете ли вы работать в торговых центрах?",
      answer: "У нас есть все необходимые разрешения и аккредитации для работы в ведущих ТЦ Москвы. Знаем все требования по монтажу."
    },
    {
      question: "Что входит в стоимость проекта?",
      answer: "В стоимость входит: проектирование, 3D-визуализация, изготовление, доставка и монтаж. Никаких скрытых доплат."
    },
    {
      question: "Даете ли гарантию на свою работу?",
      answer: "Да, мы даем гарантию на все элементы конструкции и берем на себя ответственность за качество монтажа."
    },
    {
      question: "Можно ли изменить проект в процессе производства?",
      answer: "Небольшие корректировки возможны на этапе 3D-моделирования. После утверждения макета изменения обсуждаются отдельно."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;