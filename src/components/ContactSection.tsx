import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/SachinMehroliya", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "www.linkedin.com/in/sachin-mehroliya-00a788259", color: "hover:text-primary" },
    { icon: Mail, label: "Email", href: "sachinverma13713@gmail.com", color: "hover:text-secondary" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border hover:border-primary transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Let's Connect</CardTitle>
                <CardDescription className="text-muted-foreground text-base mt-4">
                  I'm actively looking for <span className="text-primary font-semibold">SDE / Software Development roles</span> and
                  exciting problem-solving opportunities. Feel free to reach out for internships, collaborations, or projects.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-center text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-card border border-border rounded-lg transition-all hover:border-primary ${link.color} hover:scale-110`}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
