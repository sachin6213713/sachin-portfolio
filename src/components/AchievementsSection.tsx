import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Target, Code, Star, Zap } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Code,
      title: "350+ DSA Problems",
      description: "Solved on LeetCode",
      highlight: "Problem-Solving Mastery",
    },
    {
      icon: Trophy,
      title: "Codeforces Specialist",
      description: "Rating: 1504",
      highlight: "Competitive Programming",
    },
    {
      icon: Star,
      title: "CodeChef 3-Star",
      description: "Max Rating: 1661",
      highlight: "Consistent Performance",
    },
    {
      icon: Award,
      title: "Rank 70",
      description: "CodeChef Starters 197",
      highlight: "Top ~1%",
    },
    {
      icon: Zap,
      title: "AIR 61",
      description: "Coding Ninjas Contest",
      highlight: "10K+ Participants",
    },
    {
      icon: Target,
      title: "AIR 4054",
      description: "JEE Advanced",
      highlight: "Top ~1% (260K Candidates)",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                    <p className="text-sm text-secondary font-semibold">{achievement.highlight}</p>
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

export default AchievementsSection;
