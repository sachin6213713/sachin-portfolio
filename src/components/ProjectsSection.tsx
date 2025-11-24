import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Metro Route Optimization",
      period: "May 2025",
      type: "Self-Project",
      description: "Engineered metro route optimization system using C++ and graph algorithms for finding shortest paths efficiently.",
      techStack: ["C++", "Dijkstra's Algorithm", "Priority Queue", "OOP", "Graph Theory"],
      highlights: [
        "Utilized adjacency lists and Dijkstra's algorithm for shortest path computation",
        "Implemented Priority Queue with Heap for logarithmic-time operations",
        "Built interactive CLI for structured input and formatted output",
        "Applied OOP concepts: encapsulation, abstraction, polymorphism",
        "Optimized graph traversal using edge weights and interchange constraints",
      ],
    },
    {
      title: "Mentorship Web Application",
      period: "Jun 2024",
      type: "Self-Project",
      description: "Full-stack MERN platform connecting mentors and mentees with secure authentication and payment integration.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Razorpay", "Tailwind CSS"],
      highlights: [
        "Built responsive UI with React.js, Tailwind CSS, and RESTful APIs",
        "Implemented JWT authentication and bcrypt hashing for security",
        "Developed OTP verification using Nodemailer and Validator.js",
        "Integrated Razorpay for payment processing with error handling",
        "Used MongoDB and Mongoose for efficient CRUD operations",
      ],
    },
    {
      title: "AI Road Safety Audit",
      period: "Jul 2025 - Present",
      type: "Bachelor Thesis Project",
      description: "AI-powered platform for automated road hazard detection and safety audits using computer vision and deep learning.",
      techStack: ["React.js", "Node.js", "MongoDB", "YOLOv8", "PyTorch", "OpenCV", "Leaflet.js"],
      highlights: [
        "Responsive frontend with React.js and Tailwind for hazard uploads and dashboards",
        "Backend with Node.js and Express.js for AI inference pipelines",
        "MongoDB with GeoJSON for geospatial queries and hazard storage",
        "Integrated YOLOv8 with PyTorch and OpenCV for detecting potholes and road cracks",
        "Generated maps and analytical reports using Leaflet.js, Mapbox, and Matplotlib",
      ],
      mentor: "Prof. Richa Ahuja, CoE-SEA, IIT Kharagpur",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-primary/10 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      {project.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  {project.mentor && (
                    <p className="text-xs text-secondary mt-2 italic">{project.mentor}</p>
                  )}
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-border hover:border-secondary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 group/btn" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    </Button>
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

export default ProjectsSection;
