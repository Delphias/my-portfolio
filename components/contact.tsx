import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sekhukhunedelphia@gmail.com",
    href: "mailto:sekhukhunedelphia@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "076 233 2588 / 083 561 4417",
    href: "tel:+27762332588",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pretoria, South Africa",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20" aria-label="Contact">
      <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>

      <p className="text-muted-foreground leading-relaxed mb-8">
        I&apos;m currently looking for new opportunities and would love to hear from
        you. Whether you have a question, a project idea, or just want to say hi,
        feel free to reach out!
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {contactInfo.map((item) => (
          <div
            key={item.label}
            className="p-4 rounded-lg bg-card border border-border text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-foreground">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Available for immediate start
        </span>
      </div>

      <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Tailwind CSS
          </a>
        </p>
      </footer>
    </section>
  );
}
