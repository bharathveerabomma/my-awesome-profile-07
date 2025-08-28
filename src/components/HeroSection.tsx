import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero text-white px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-white/90">
            Senior Software Engineer
          </h2>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with 5+ years of experience building scalable web applications 
            and leading cross-functional teams to deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-navy hover:bg-white/90 transition-smooth px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy transition-smooth px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};