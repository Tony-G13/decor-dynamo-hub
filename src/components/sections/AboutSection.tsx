import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Award, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Block */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center group cursor-pointer hover:bg-muted/80 transition-colors">
              <Button size="lg" className="rounded-full h-20 w-20">
                <Play className="h-8 w-8" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Видео о нашей компании и производстве
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">О компании SET EXPO</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы — команда профессионалов с многолетним опытом в сфере выставочного дизайна и event-индустрии. 
              Создаем впечатляющие пространства, которые работают на ваши цели.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-muted-foreground">сотрудников</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </CardContent>
              </Card>
            </div>

            <Button variant="outline" size="lg">
              Узнать больше о компании
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;