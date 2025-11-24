import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Drama, Medal, Trophy, Laptop } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      icon: Users,
      title: "Campus Ambassador - Internshala",
      description: "Organized online seminar for 300+ students and successfully converted 50+ students to join the platform.",
    },
    {
      icon: Drama,
      title: "State-Level Dramatics Competition",
      description: "Represented school in state-level competition, enhancing creativity, teamwork, and public performance skills.",
    },
    {
      icon: Medal,
      title: "Silver Medal - Illumination Team",
      description: "Won silver medal as part of Illumination team, Rajendra Prasad Hall, IIT Kharagpur in 2024.",
    },
    {
      icon: Trophy,
      title: "Tech & Sports Championships",
      description: "Active participation in Tech and Sports General Championships, demonstrating teamwork, discipline, and competitive spirit.",
    },
    {
      icon: Laptop,
      title: "Flipkart GRiD 7.0 Semifinalist",
      description: "Participated in Flipkart GRiD 7.0, qualified first online coding round and advanced to semifinalist stage.",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Extra-Curricular Activities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
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

export default ActivitiesSection;
