// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";
// import { Code2, Trophy, Award, Target } from "lucide-react";

// const HeroSection = () => {
//   const stats = [
//     { icon: Code2, label: "LeetCode", value: "350+ Problems" },
//     { icon: Trophy, label: "Codeforces", value: "Specialist (1504)" },
//     { icon: Award, label: "CodeChef", value: "3★ (1661)" },
//     { icon: Target, label: "JEE Advanced", value: "AIR 4054 (~Top 1%)" },
//   ];

//   const skills = ["MERN Stack", "DSA", "Competitive Programming", "AI/ML for Road Safety"];

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-gradient" />
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-secondary text-lg font-medium"
//             >
//               Hi, I'm
//             </motion.p>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
//             >
//               Sachin Mehroliya
//             </motion.h1>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
//             >
//               Software Developer | MERN | DSA | AI Road Safety
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-muted-foreground text-lg leading-relaxed"
//             >
//               B.S. (Hons.) Chemistry student at IIT Kharagpur, aspiring SDE with strong DSA, MERN stack skills, and AI-driven road safety projects.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-wrap gap-2"
//             >
//               {skills.map((skill, index) => (
//                 <Badge
//                   key={index}
//                   variant="secondary"
//                   className="text-sm py-1.5 px-4 bg-card border border-border hover:border-primary transition-colors"
//                 >
//                   {skill}
//                 </Badge>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               <Button
//                 size="lg"
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
//                 onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 View Projects
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-border hover:bg-card hover:scale-105 transition-transform"
//                 onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 Contact Me
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Stats Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 + index * 0.1 }}
//                 className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
//                     <stat.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
//                     <p className="text-lg font-bold text-foreground">{stat.value}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Trophy, Award, Target } from "lucide-react";
// 1. Import the image
import sachinImage from "./asset/sachin_photograph.jpg"; 
// Note: Adjusted the import path to 'asset/sachin.jpg' relative to 'components' which is the parent of 'ui' where this component likely resides. 
// If HeroSection is in src/components, the path should be:
// import sachinImage from "../assets/sachin.jpg"; // assuming 'asset' is 'assets'

const HeroSection = () => {
  const stats = [
    { icon: Code2, label: "LeetCode", value: "350+ Problems" },
    { icon: Trophy, label: "Codeforces", value: "Specialist (1504)" },
    { icon: Award, label: "CodeChef", value: "3★ (1661)" },
    { icon: Target, label: "JEE Advanced", value: "AIR 4054 (~Top 1%)" },
  ];

  const skills = ["MERN Stack", "DSA", "Competitive Programming", "AI/ML for Road Safety"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-gradient" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-secondary text-lg font-medium"
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
            >
              Sachin Mehroliya
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Software Developer | MERN | DSA | AI/Data
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Final Year UG student at IIT Kharagpur, aspiring SDE with strong DSA, MERN stack skills, and AI-driven road safety projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="primary"
                  className="text-sm py-1.5 px-4 bg-card border border-border hover:border-primary transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card hover:scale-105 transition-transform"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            // Container for the image, ensuring it fills the right column (lg:col-span-1 implicit)
            // Aspect ratio set to 1/1 for a square shape, max-w-full to respect grid column
            className="w-5/6 h-full relative overflow-hidden rounded-xl shadow-2xl border-4 border-primary/50 group"
          >
            <img 
              src={sachinImage} 
              alt="Sachin Mehroliya - Profile" 
              // Tailwind classes for the image: fill the container, cover the area, centered
              className="w-full h-full object-cover object-center aspect-square transition-transform duration-500 group-hover:scale-105"
            />
            {/* Optional: Add an overlay or border effect */}
            <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;