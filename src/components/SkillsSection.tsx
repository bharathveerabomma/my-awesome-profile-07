import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Cloud, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vue.js", level: 75 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Kubernetes", level: 70 }
    ]
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "Accessibility", level: 80 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy">
                    <category.icon className="mr-3 h-6 w-6 text-gold" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Git", "GitHub Actions", "Jest", "Cypress", "MongoDB", "Redis", 
                "Stripe", "Supabase", "Vercel", "Netlify", "Sass", "Webpack"
              ].map((tech) => (
                <div 
                  key={tech} 
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-gold hover:text-navy transition-smooth cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};