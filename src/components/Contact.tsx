import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          <Card className="glass-card p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Email</h3>
                  <a
                    href="mailto:yordiyyo012@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yordiyyo012@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out if you're looking for a developer, 
              have a question, or just want to connect.
            </p>
            <Button
              size="lg"
              className="gradient-accent text-primary-foreground w-full hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:yordiyyo012@gmail.com">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
