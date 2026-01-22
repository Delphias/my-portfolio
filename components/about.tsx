export function About() {
  return (
    <section id="about" className="py-16 scroll-mt-20" aria-label="About me">
      <h2 className="text-2xl font-bold text-foreground mb-6">About Me</h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a motivated and adaptable{" "}
          <span className="text-foreground font-medium">Full Stack Web Developer</span>{" "}
          with hands-on experience in front-end and web application development. My
          expertise spans modern technologies including{" "}
          <span className="text-primary">Angular</span>,{" "}
          <span className="text-primary">TypeScript</span>,{" "}
          <span className="text-primary">React</span>, SQL, and contemporary UI
          frameworks.
        </p>

        <p>
          Throughout my career, I&apos;ve had the privilege of supporting real-world
          systems within Agile teams at{" "}
          <a
            href="https://www.absa.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium hover:text-primary transition-colors"
          >
            Absa Bank
          </a>
          , contributing to feature development, testing, debugging, and performance
          improvements. I&apos;m passionate about building accessible, user-friendly
          interfaces that make a real impact.
        </p>

        <p>
          Currently based in{" "}
          <span className="text-foreground font-medium">Pretoria, South Africa</span>,
          I&apos;m seeking new opportunities to grow as a developer, gain mentorship,
          and contribute to innovative projects. When I&apos;m not coding, I enjoy
          exploring new technologies and staying up-to-date with the latest industry
          trends.
        </p>
      </div>
    </section>
  );
}
