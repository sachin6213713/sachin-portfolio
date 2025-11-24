import { motion } from "framer-motion";
import { MapPin, Briefcase, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const infoCards = [
    { icon: MapPin, label: "Based in", value: "India" },
    { icon: Briefcase, label: "Role", value: "Software Development / SDE" },
    { icon: Heart, label: "Interests", value: "Problem Solving, Web Dev, DSA and AI" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Final Year UG Student <span className="text-foreground font-semibold"> in Chemistry Department</span> at{" "}
              <span className="text-primary font-semibold">IIT Kharagpur</span>  but my true passion lies in problem solving and software development.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in the <span className="text-secondary font-semibold">Software Development</span> and have a strong foundation in{" "}
              <span className="text-secondary font-semibold">Mern Stack & Data Structures & Algorithms</span>. I've solved over 400+ DSA problems on Various platforms
              and achieved competitive programming milestones on platforms like Codeforces and CodeChef.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently, I'm working on an exciting <span className="text-accent font-semibold">AI-powered road safety audit</span> platform
              as my bachelor thesis project, leveraging YOLOv8, React, and Node.js to detect road hazards and improve infrastructure.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond coding, I balance academics with extracurriculars like dramatics, tech competitions, and sports, bringing creativity
              and teamwork to everything I do.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {infoCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-lg font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
