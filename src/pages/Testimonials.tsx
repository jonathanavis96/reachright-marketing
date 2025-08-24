// src/pages/Testimonials.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, BadgeCheck } from "lucide-react";
import Seo from "@/components/Seo";

type Testimonial = {
  name: string;
  company: string;
  rating: number; // 1-5
  text: string;
  result: string;
  verified?: boolean;
  link?: string;    // optional hyperlink for company/logo
  logo?: string;    // optional company logo path (served from /public)
  logoAlt?: string; // accessible alt text for the logo
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Caroline Beer",
      company: "Coastal and Environmental Services",
      rating: 5,
      text:
        "ReachRight Marketing transformed our online presence. Their expertise in social media management and SEO helped us reach new customers we never thought possible. Highly recommend!",
      result: "300% increase in online engagement",
      verified: true,
      link: "https://www.cesnet.co.za/",
      // Corrected path for Vite/GitHub Pages using BASE_URL
      logo: `${import.meta.env.BASE_URL}assets/img/logos/CESlogo.png`,
      logoAlt: "CES (Coastal and Environmental Services) logo",
    },
    {
      name: "Sarah Mitchell",
      company: "Mitchell & Associates",
      rating: 5,
      text:
        "Working with ReachRight has been a game-changer for our law firm. Their professional approach and understanding of our industry helped us build trust with potential clients online.",
      result: "80% increase in qualified leads",
    },
    {
      name: "David Thompson",
      company: "Thompson Construction",
      rating: 5,
      text:
        "As a small construction company, we thought digital marketing was too complex for us. ReachRight made it simple and affordable. Our phone hasn't stopped ringing since we started!",
      result: "140% increase in project inquiries",
    },
    {
      name: "Samantha Price",
      company: "Seaside Bistro",
      rating: 4,
      text:
        "The social media content ReachRight creates for our restaurant is absolutely amazing. Our followers love the posts, and we've seen a significant increase in reservations and takeout orders.",
      result: "120% increase in social media followers",
    },
    {
      name: "James Wilson",
      company: "Wilson Tech Solutions",
      rating: 5,
      text:
        "ReachRight's technical expertise and understanding of B2B marketing helped us establish credibility in the tech industry. Their LinkedIn strategy alone brought us several new enterprise clients.",
      result: "200% increase in LinkedIn engagement",
    },
    {
      name: "Lisa Chen",
      company: "Chen Beauty Salon",
      rating: 5,
      text:
        "The branding work ReachRight did for us was exceptional. They captured our salon's personality perfectly, and the new brand identity has attracted so many new clients.",
      result: "80% increase in new client bookings",
    },
  ];

  const stats = [
    { number: "20+", label: "Happy Clients" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "150%", label: "Average Growth" },
    { number: "24/7", label: "Support Available" },
  ];

  const MAX_STARS = 5;

  // SEO helpers for aggregate rating & JSON-LD
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ReachRight Marketing",
      url: "https://reachrightmarketing.com/",
      logo:
        "https://reachrightmarketing.com/assets/img/branding/android-chrome-512x512.png",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: averageRating.toFixed(2),
        reviewCount: testimonials.length,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Client Testimonials — ReachRight Marketing",
      url:
        typeof window !== "undefined"
          ? window.location.href
          : "https://reachrightmarketing.com/testimonials",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: testimonials.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewBody: t.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
              worstRating: 1,
            },
            itemReviewed: {
              "@type": "Organization",
              name: "ReachRight Marketing",
              url: "https://reachrightmarketing.com/",
            },
          },
        })),
      },
    },
  ];

  return (
    <>
      <Seo
        title="Testimonials — ReachRight Marketing"
        description="Read real client success stories and reviews of ReachRight Marketing. See how SMEs grew their leads, engagement, and revenue with our digital marketing."
        jsonLd={jsonLd as unknown as object}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Client <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how we've helped SMEs grow and thrive through personalized
                marketing strategies
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="marketing-card relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Verified Badge (top-right) */}
                  {testimonial.verified && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      <BadgeCheck className="w-4 h-4" />
                      Verified Client
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary/20 mr-3" />
                    <div className="flex">
                      {[...Array(MAX_STARS)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "w-5 h-5 fill-warning text-warning"
                              : "w-5 h-5 text-muted-foreground"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>

                        {/* Company */}
                        <div className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </div>

                        {/* Optional company logo as a hyperlink */}
                        {testimonial.logo && testimonial.link && (
                          <div className="flex items-center gap-2 mt-2">
                            <a
                              href={testimonial.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${testimonial.company} website`}
                              title={testimonial.company}
                              className="inline-flex"
                            >
                              <img
                                src={testimonial.logo}
                                alt={
                                  testimonial.logoAlt ||
                                  `${testimonial.company} logo`
                                }
                                className="h-6 w-auto object-contain"
                                loading="lazy"
                              />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 section-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create a success story for your business. Get started
                with a free consultation and discover how we can help you
                achieve your marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="contact"
                  className="btn-hero inline-flex items-center justify-center text-center"
                >
                  Start Your Success Story
                </a>
                <a
                  href="pricing"
                  className="btn-outline inline-flex items-center justify-center text-center"
                >
                  View Our Packages
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Proven Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How we help businesses achieve remarkable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Discovery
                </h3>
                <p className="text-muted-foreground">
                  We learn about your business, goals, and target audience
                </p>
              </div>

              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Strategy
                </h3>
                <p className="text-muted-foreground">
                  We create a customized marketing strategy for your success
                </p>
              </div>

              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Execute
                </h3>
                <p className="text-muted-foreground">
                  We implement and manage your marketing campaigns
                </p>
              </div>

              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Optimize
                </h3>
                <p className="text-muted-foreground">
                  We continuously improve and scale your results
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
