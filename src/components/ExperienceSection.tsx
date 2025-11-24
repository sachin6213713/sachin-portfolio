import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Software Development Intern</h3>
                      <p className="text-xl text-secondary font-semibold mb-1">CampussBuzz</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        May 2025 - July 2025
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <p className="text-muted-foreground">
                          Built sign-in and sign-up pages with <span className="text-foreground font-semibold">JWT authentication</span> and{" "}
                          <span className="text-foreground font-semibold">bcrypt-encrypted</span> passwords for onboarding{" "}
                          <span className="text-secondary font-semibold">2000+ users</span>.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <p className="text-muted-foreground">
                          Designed <span className="text-foreground font-semibold">responsive UI</span> using React.js and Tailwind CSS
                          with cross-browser compatibility.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <p className="text-muted-foreground">
                          Developed & optimized a <span className="text-foreground font-semibold">jobs page</span> with search, filter,
                          real-time listings, improving job finding efficiency by{" "}
                          <span className="text-secondary font-semibold">~40%</span>.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <p className="text-muted-foreground">
                          Integrated <span className="text-foreground font-semibold">RESTful APIs</span> for auth and data handling,
                          improving page responsiveness.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <p className="text-muted-foreground">
                          Collaborated with <span className="text-foreground font-semibold">UI/UX designers and backend engineers</span>,
                          using Git/GitHub and CI/CD pipelines.
                        </p>
                      </div>
                    </div>
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

export default ExperienceSection;
