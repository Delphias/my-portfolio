import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Oct 2023 — Mar 2025",
    title: "Junior Front-End Developer (Angular)",
    company: "Absa Bank",
    companyUrl: "https://www.absa.co.za",
    description:
      "Contributed to the development and maintenance of Angular web applications using TypeScript, HTML, and CSS. Assisted in building responsive, user-friendly interfaces aligned with UX designs from Figma. Supported debugging and performance improvements under guidance of senior developers.",
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "Figma", "Jira", "Git"],
  },
  {
    period: "Apr 2023 — Sep 2023",
    title: "Graduate Software Developer",
    company: "Shaper",
    companyUrl: "#",
    description:
      "Built front-end applications using Angular, HTML, CSS, JavaScript, and TypeScript. Assisted with database creation and management using PostgreSQL. Designed wireframes and UML diagrams using Figma and Draw.io. Tested APIs with Postman and deployed applications.",
    technologies: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
      "Postman",
      "Figma",
    ],
  },
  {
    period: "Oct 2021 — Sep 2022",
    title: "IT Intern (Business Applications)",
    company: "Sefako Makgatho Health Science University",
    companyUrl: "https://www.smu.ac.za",
    description:
      "Provided user and system support for business applications. Assisted with software testing, installation, configuration, and troubleshooting. Automated manual processes to improve operational efficiency. Logged and resolved tickets while escalating complex issues to senior staff.",
    technologies: [
      "Software Testing",
      "System Support",
      "Process Automation",
      "Documentation",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-20" aria-label="Work experience">
      <h2 className="text-2xl font-bold text-foreground mb-8">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              {exp.period}
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors group"
              >
                {exp.title} · {exp.company}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {exp.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
