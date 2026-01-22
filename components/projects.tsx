import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Chat Application",
    description:
      "A real-time MERN stack chat application with user authentication message notifications, and online status. Built with Socket.io for instant communication and an intuitive UI for seamless chatting experience.",
    image: "/chat app.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],
    liveUrl: "https://chat-app-xh2t.onrender.com",
    featured: true,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Twitter Clone",
    description:
      "A full-stack Twitter clone built with the MERN stack, featuring user authentication, real-time tweets, likes, retweets, comments, profile management, and a dynamic newsfeed.",
    image: "/x.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],
    liveUrl: "https://twitter-clone-i8jj.onrender.com",
    featured: true,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A responsive weather application built with vanilla JavaScript. Users can search for real-time weather conditions by city.",
    image: "/weather app.png",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    liveUrl: "https://weather-app-six-phi-85.vercel.app/",
    featured: false,
    color: "from-green-500 to-emerald-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-20" aria-label="Projects">
      <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
