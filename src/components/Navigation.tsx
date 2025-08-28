import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="transition-smooth"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};