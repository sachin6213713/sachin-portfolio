import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <CardTitle className="text-2xl text-foreground">Campuss Ambassador</CardTitle>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-0">
                        Aug 2025
                      </Badge>
                    </div>
                    <CardDescription className="text-lg text-secondary font-semibold">
                      Internshala
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    Certified for outstanding campus leadership and organizing successful high-impact events
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    {/* Built a React-based web application using{" "}
                    Achieved significant student enrollment through proactive outreach and effective guidance. */}
                    {/* <span className="text-foreground font-semibold">Backpack React</span> component library. */}
                    Achieved significant student enrollment through proactive outreach and effective guidance.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-muted-foreground">
                    {/* Customized features and wrote{" "}
                    <span className="text-foreground font-semibold">automated tests</span> for reliable UI and functionality.
                    */}
                    Successfully established a robust, active student network for Internshala
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
