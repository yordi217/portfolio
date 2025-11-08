import { Code, Database, Layout, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      techs: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      techs: ["Node.js", "Express"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      techs: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      icon: <Code className="w-6 h-6" />,
      techs: ["Git", "GitHub", "VS Code", "Vite"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer with experience in building modern web applications. 
            I enjoy creating things that live on the internet, whether that be websites, applications, 
            or anything in between. My goal is to always build products that provide pixel-perfect, 
            performant experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {skills.map((skill, index) => (
            <Card
              key={skill.category}
              className="glass-card p-6 hover:glow-accent transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
