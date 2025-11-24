import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, BookOpen, Layers } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "HTML", "CSS", "JavaScript", "SQL", "Python (Familiar)"],
    },
    {
      title: "Technologies & Frameworks",
      icon: Layers,
      skills: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "RESTful APIs", "JWT", "OpenCV", "YOLOv8"],
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["VS Code", "Git & GitHub", "Postman", "Thunder Client", "Jupyter", "NPM", "MongoDB Atlas", "MySQL"],
    },
    {
      title: "Core CS Courses",
      icon: BookOpen,
      skills: ["MERN Stack Development", "DSA", "DBMS", "Operating Systems", "OOPs", "Computer Networks", "System Design (LLD)"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="primary"
                        className="bg-background border border-border hover:border-secondary hover:bg-secondary/10 transition-all"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default SkillsSection;
