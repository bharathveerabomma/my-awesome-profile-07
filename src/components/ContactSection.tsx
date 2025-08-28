import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-card border-0 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy mb-4">
                    Let's Work Together
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you're a company looking to hire or a fellow developer wanting to collaborate, 
                    I'd love to hear from you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">john.doe@example.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-muted-foreground">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy">
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input 
                          placeholder="First Name" 
                          required 
                          className="border-muted focus:border-navy"
                        />
                      </div>
                      <div>
                        <Input 
                          placeholder="Last Name" 
                          required 
                          className="border-muted focus:border-navy"
                        />
                      </div>
                    </div>
                    
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      className="border-muted focus:border-navy"
                    />
                    
                    <Input 
                      placeholder="Subject" 
                      required 
                      className="border-muted focus:border-navy"
                    />
                    
                    <Textarea 
                      placeholder="Your Message" 
                      required 
                      rows={5}
                      className="border-muted focus:border-navy resize-none"
                    />
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-hero hover:opacity-90 transition-smooth"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};