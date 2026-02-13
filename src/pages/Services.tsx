// src/pages/Services.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Share2, 
  Search, 
  FileText, 
  Monitor, 
  Palette, 
  Users, 
  BarChart3, 
  Eye 
} from "lucide-react";
import socialMediaImg from "@/assets/social-media-marketing.jpg";
import seoContentImg from "@/assets/seo-content.jpg";
import brandingImg from "@/assets/branding-design.jpg";
import alldonesitesImg from "@/assets/site-builder-illustration.webp"; // ⬅️ NEW: homepage screenshot
import Seo from "@/components/Seo";

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  image: string;
  href?: string; // ⬅️ NEW: optional external/internal link
  partner?: {
    label: string;
    url: string;
  }; // ⬅️ NEW: optional partner badge
};

const Services = () => {
  const services: Service[] = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description:
        "Complete social media solutions including profile setup, branding, content creation, scheduling, and community management across all major platforms.",
      features: [
        "Profile setup and branding",
        "Content creation and curation",
        "Post scheduling and automation",
        "Community management and engagement",
        "Social media monitoring",
      ],
      image: socialMediaImg,
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies tailored to your business.",
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO audits",
        "Link building strategies",
        "Local SEO optimization",
      ],
      image: seoContentImg,
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Marketing",
      description:
        "Engaging, high-quality content that tells your brand story and converts visitors into customers.",
      features: [
        "Blog writing and management",
        "Content strategy development",
        "Email marketing campaigns",
        "Video content creation",
        "Content calendar planning",
      ],
      image: seoContentImg,
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Website Design & Development",
      description:
        "Modern, responsive websites that not only look great but also drive conversions and provide excellent user experience.",
      features: [
        "Responsive web design",
        "E-commerce development",
        "Landing page optimization",
        "Website maintenance",
        "Performance optimization",
      ],
      image: alldonesitesImg, // ⬅️ NEW: show All Done Sites homepage
      href: "https://alldonesites.com", // ⬅️ NEW: link out
      partner: {
        label: "Powered by All Done Sites",
        url: "https://alldonesites.com",
      }, // ⬅️ Optional partner badge (shown below title)
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & Creative Design",
      description:
        "Build a strong, memorable brand identity that resonates with your target audience and sets you apart from the competition.",
      features: [
        "Logo design and branding",
        "Brand guidelines development",
        "Marketing materials design",
        "Social media graphics",
        "Print and digital design",
      ],
      image: brandingImg,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Partnerships",
      description:
        "Connect with the right influencers to amplify your brand message and reach new audiences authentically.",
      features: [
        "Influencer identification and outreach",
        "Campaign strategy and management",
        "Partnership negotiations",
        "Performance tracking",
        "ROI measurement",
      ],
      image: socialMediaImg,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Social Listening",
      description:
        "Monitor your brand's online presence and gain valuable insights into customer sentiment and market trends.",
      features: [
        "Brand mention monitoring",
        "Sentiment analysis",
        "Competitor tracking",
        "Crisis management",
        "Market research insights",
      ],
      image: seoContentImg,
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Competitor Analysis",
      description:
        "Stay ahead of the competition with comprehensive analysis of their strategies, strengths, and opportunities.",
      features: [
        "Competitive landscape analysis",
        "Strategy benchmarking",
        "Gap identification",
        "Market positioning insights",
        "Opportunity mapping",
      ],
      image: seoContentImg,
    },
  ];

  return (
    <>
      <Seo
        title="Services — ReachRight Marketing"
        description="Explore ReachRight Marketing's services including social media management, SEO, content marketing, website design, branding, influencer partnerships, and more."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Marketing Services",
          provider: {
            "@type": "Organization",
            name: "ReachRight Marketing",
            url: "https://reachrightmarketing.com",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Marketing Services",
            itemListElement: services.map((s) => ({
              "@type": "Service",
              name: s.title,
              description: s.description,
            })),
          },
        }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital marketing solutions designed to help your business thrive in the digital landscape
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const CardContent = (
                  <div className="marketing-card animate-scale-in">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={service.image}
                          alt={
                            service.title === "Website Design & Development"
                              ? "All Done Sites – website homepage preview"
                              : service.title
                          }
                          className="w-full h-48 md:h-32 object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                            {service.icon}
                          </div>
                          <div className="flex flex-col gap-1">
                            {service.href ? (
                              <a
                                href={service.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-foreground hover:text-primary focus:text-primary underline-offset-4 hover:underline focus:underline"
                                aria-label={`${service.title} — opens in a new tab`}
                              >
                                {service.title}
                              </a>
                            ) : (
                              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                            )}

                            {/* Optional partner badge */}
                            {service.partner && (
                              <a
                                href={service.partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary hover:bg-primary/15"
                                aria-label={`${service.partner.label} — opens in a new tab`}
                              >
                                {service.partner.label}
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );

                // If href exists, make the whole card clickable for easier UX
                return service.href ? (
                  <a
                    key={index}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl"
                    aria-label={`${service.title} — opens in a new tab`}
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={index}>{CardContent}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive marketing services can help your business reach new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-hero inline-flex items-center justify-center text-center"
                >
                  Get Started Today
                </a>
                <a
                  href="/pricing"
                  className="btn-outline inline-flex items-center justify-center text-center"
                >
                  View Our Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
