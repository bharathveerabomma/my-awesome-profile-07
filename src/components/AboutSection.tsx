import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-card border-0">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    I'm a passionate software engineer with a love for creating innovative solutions 
                    that make a real difference. With over 5 years of experience in full-stack development, 
                    I specialize in React, Node.js, and cloud technologies.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or mentoring aspiring developers. I believe in continuous learning and staying 
                    ahead of industry trends.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My goal is to build software that not only works flawlessly but also provides 
                    exceptional user experiences and drives business growth.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-navy mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Team Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};