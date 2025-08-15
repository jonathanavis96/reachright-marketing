// src/pages/Testimonials.tsx
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, BadgeCheck } from "lucide-react";

type Testimonial = {
  name: string;
  company: string;
  rating: number; // 1-5
  text: string;
  result: string;
  verified?: boolean;
  link?: string; // optional hyperlink for company/logo
  logo?: string; // optional company logo path (served from /public)
  logoAlt?: string; // accessible alt text for the logo
};

const STAR_TOTAL = 5;

const RatingStars: React.FC<{ rating: number; className?: string }> = ({
  rating,
  className,
}) => {
  const rounded = Math.max(0, Math.min(STAR_TOTAL, Math.round(rating)));
  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: STAR_TOTAL }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rounded ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => {
  const content = (
    <div className="relative h-full rounded-2xl border bg-card p-6 shadow-sm">
      {/* Verified badge */}
      {t.verified && (
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-900/40">
          <BadgeCheck className="h-4 w-4" />
          <span className="text-xs font-medium">Verified client</span>
        </div>
      )}

      {/* Header: Logo + Company */}
      <div className="mb-4 flex items-center gap-3">
        {t.logo && (
          <img
            src={t.logo}
            alt={t.logoAlt ?? `${t.company} logo`}
            className="h-8 w-auto object-contain"
            loading="lazy"
          />
        )}

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-semibold text-foreground">
              {t.name}
            </h3>
            <RatingStars rating={t.rating} />
          </div>

          <p className="truncate text-sm text-muted-foreground">
            {t.link ? (
              <a
                href={t.link}
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-dotted underline-offset-4 hover:text-foreground"
              >
                {t.company}
              </a>
            ) : (
              t.company
            )}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="mb-4 flex gap-3">
        <Quote className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
        <p className="text-base leading-relaxed text-foreground">{t.text}</p>
      </div>

      {/* Result */}
      <div className="rounded-xl bg-muted/60 p-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Result:&nbsp;</span>
        {t.result}
      </div>
    </div>
  );

  // If there's a link but no logo, still allow the whole card header to be clickable.
  return content;
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      // CES card (with verified + logo + link)
      name: "Caroline Beer",
      company: "Coastal and Environmental Services",
      rating: 5,
      text:
        "ReachRight quickly understood our goals and executed a clean, effective strategy across web and social. Reporting was clear and results were tangible.",
      result:
        "150% growth in qualified leads; 120% increase in project inquiries; stronger brand consistency across channels.",
      verified: true,
      link: "https://www.cesnet.co.za", // keep/change as needed
      logo: "/assets/img/logos/CESlogo.png",
      logoAlt: "CES – Coastal and Environmental Services",
    },
    {
      name: "Peter Brown",
      company: "Brown Plumbing",
      rating: 4,
      text:
        "The Launch site got us online fast. We started getting calls within the first week. Simple to update and looks professional.",
      result:
        "80% increase in qualified leads; 140% increase in project inquiries; 80% increase in new client bookings.",
      verified: false,
      logo: "/assets/img/logos/plumbing-placeholder.png",
      logoAlt: "Brown Plumbing",
    },
    {
      name: "Aisha Khan",
      company: "Khan Legal Advisory",
      rating: 5,
      text:
        "Excellent communication and a smooth process. Our content was structured clearly and the site feels trustworthy.",
      result:
        "200% increase in LinkedIn engagement; 120% increase in social media followers; improved conversion rate from enquiries.",
      verified: false,
    },
    {
      name: "Michael Adams",
      company: "Adams Architecture Studio",
      rating: 5,
      text:
        "They refined our positioning and showcased our portfolio beautifully. The analytics insights were particularly helpful.",
      result:
        "110% increase in discovery calls; shorter sales cycles thanks to clearer messaging.",
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Client Testimonials
          </h1>
          <p className="mt-3 text-muted-foreground">
            Real results from SMEs we’ve helped grow.
          </p>
        </header>

        {/* Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </section>

        {/* CTA / Process */}
        <section className="mt-14 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">How we work</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-muted/60 p-4">
              <h3 className="mb-2 text-xl font-bold text-foreground">Discover</h3>
              <p className="text-sm text-muted-foreground">
                We learn your goals, audience, and brand to shape a focused plan.
              </p>
            </div>

            <div className="rounded-xl bg-muted/60 p-4">
              <h3 className="mb-2 text-xl font-bold text-foreground">Design</h3>
              <p className="text-sm text-muted-foreground">
                We create clean, fast experiences and clear messaging that converts.
              </p>
            </div>

            <div className="rounded-xl bg-muted/60 p-4">
              <h3 className="mb-2 text-xl font-bold text-foreground">Execute</h3>
              <p className="text-sm text-muted-foreground">
                Launch, measure, and iterate with transparent reporting.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
