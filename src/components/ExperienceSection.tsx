import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovation Corp",
    period: "2022 - Present",
    description: "Lead development of scalable web applications serving 100K+ users. Mentor junior developers and architect cloud-native solutions using React, Node.js, and AWS.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led team of 5 developers on critical product launch",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "AWS", "TypeScript", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
    achievements: [
      "Built 15+ responsive web applications",
      "Improved code quality through implementing testing standards",
      "Contributed to 25% increase in client satisfaction"
    ],
    technologies: ["React", "Python", "PostgreSQL", "MongoDB", "CSS"]
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description: "Started career building features for early-stage startup products. Gained experience in rapid prototyping and agile development methodologies.",
    achievements: [
      "Developed key features for MVP launch",
      "Learned modern development practices",
      "Contributed to successful funding round"
    ],
    technologies: ["JavaScript", "React", "Express", "MySQL"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-navy mb-2">{exp.title}</CardTitle>
                      <div className="text-lg font-semibold text-gold mb-2">{exp.company}</div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-navy/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};