import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cityAdminImage from "@/assets/city-admin-project.jpg";
import pmrsImage from "@/assets/pmrs-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "City Administration Website",
      description:
        "A modern web portal for city services providing easy access to permits, utilities, and municipal information. Built with a focus on accessibility and performance.",
      image: cityAdminImage,
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "PMRS - Planning, Monitoring & Reporting System",
      description:
        "Comprehensive web application for project tracking and management. Features include real-time monitoring, detailed reporting, and intuitive project planning tools.",
      image: pmrsImage,
      tech: ["React", "TypeScript", "Vite", "REST APIs"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass-card overflow-hidden hover:glow-accent transition-all duration-500 animate-slide-up ${
                index % 2 === 0 ? "" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      className="gradient-accent text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
