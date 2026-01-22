import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/semakane-delphia-sekhukhune-7a5328119/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:sekhukhunedelphia@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+27762332588",
    label: "Phone",
  },
];

export function Hero() {
  return (
    <header className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
        Sekhukhune Semakane Delphia
      </h1>
      <h2 className="mt-4 text-xl font-medium tracking-tight text-primary">
        Full Stack Web Developer
      </h2>
      <p className="mt-4 max-w-md mx-auto leading-relaxed text-muted-foreground">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>

      <ul className="mt-8 flex items-center justify-center gap-6" aria-label="Social links">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-primary transition-colors"
              aria-label={`${link.label} (opens in new tab)`}
            >
              <link.icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
