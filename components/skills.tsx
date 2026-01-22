const skillCategories = [
  {
    title: "Frontend",
    skills: ["Angular", "TypeScript", "JavaScript", "React", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend & Database",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "PostgreSQL", "SQL", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Bitbucket", "Jira", "Confluence", "Postman", "Figma", "Draw.io"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Agile Methodology",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Code Review",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-20" aria-label="Skills">
      <h2 className="text-2xl font-bold text-foreground mb-8">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-lg bg-card border border-border">
        <h3 className="text-sm font-semibold text-foreground mb-4">Education</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>
            <span className="text-foreground font-medium">
              National Certificate: IT Systems Support
            </span>{" "}
            — MICT SETA, 2025
          </li>
          <li>
            <span className="text-foreground font-medium">
              BSc in Information Technology (System Development)
            </span>{" "}
            — PC Training & Business College, 2015
          </li>
          <li>
            <span className="text-foreground font-medium">
              National Senior Certificate (Matric)
            </span>{" "}
            — Northern Academy Secondary School, 2012
          </li>
        </ul>
      </div>
    </section>
  );
}
