import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and order management.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Modern weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
    image: "/placeholder.svg",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    image: "/placeholder.svg",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`shadow-card border-0 hover:shadow-lg transition-smooth overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="aspect-video bg-gradient-accent/10 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Project Preview</div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-navy">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge className="bg-gradient-accent text-navy">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-navy/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};