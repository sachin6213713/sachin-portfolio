import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "4-Year B.S in Chemistry",
      institution: "IIT Kharagpur",
      duration: "2022 - 2026",
      grade: "Class Representative",
      description: "Final Year UG Student with strong expertize in software development.",
    },
    {
      degree: "XII (CBSE)",
      institution: "G.R. International School, Mahendergarh",
      duration: "2021",
      grade: "96%",
      description: "Completed senior secondary education with excellence in Science and Mathematics.",
    },
    {
      degree: "X (CBSE)",
      institution: "G.R. International School, Mahendergarh",
      duration: "2019",
      grade: "91%",
      description: "Completed secondary education with strong academic performance across all subjects.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </span>
                      </div>
                      
                      <p className="text-secondary font-semibold">{edu.institution}</p>
                      <p className="text-lg font-semibold text-accent">{edu.grade}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
