// src/pages/Index.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";
import Seo from "@/components/Seo";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featureBlocks = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Thrive with Innovative Marketing",
      description:
        "Unlock the potential of your business with our expert marketing solutions and propel your brand to new heights.",
      cta: "Read More Here",
      link: "services",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Our Pricing",
      description:
        "Accessible and affordable packages catering to sole proprietorships, SMEs, and enterprises alike.",
      cta: "View Plans",
      link: "pricing",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Contact Us",
      description:
        "Ready to get started? Get in touch via email, phone, or WhatsApp for a free consultation.",
      cta: "Get in Touch",
      link: "contact",
    },
  ];

  return (
    <>
      <Seo
        title="ReachRight Marketing — Digital Marketing for SMEs"
        description="Affordable, results-driven digital marketing for small and medium businesses: SEO, social media, branding, and content to grow your brand."
        // canonical auto-resolves to https://reachrightmarketing.com/ via Seo.tsx
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ReachRight Marketing",
          url: "https://reachrightmarketing.com/",
          logo:
            "https://reachrightmarketing.com/assets/img/branding/android-chrome-512x512.png",
          foundingDate: "2023",
          founder: {
            "@type": "Person",
            name: "Jonathan Avis",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cape Town",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+27-82-222-7457",
            contactType: "customer service",
            areaServed: "ZA",
            availableLanguage: ["en"],
          },
          sameAs: [
            // Add your real social URLs if/when available, e.g.:
            // "https://www.facebook.com/reachrightmarketing",
            // "https://www.linkedin.com/company/reachright-marketing",
            // "https://twitter.com/reachrightmktg"
          ],
        }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 hero-gradient opacity-90"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Ignite Your Brand&apos;s
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Brilliance!
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the power of our comprehensive and cost-effective
                digital marketing services tailored to meet your business needs.
              </p>
              <Button
                onClick={scrollToContact}
                className="btn-hero text-lg px-8 py-4 animate-float"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Feature Blocks Section */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureBlocks.map((block, index) => (
                <div
                  key={index}
                  className="marketing-card text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    {block.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {block.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {block.description}
                  </p>
                  <Button className="btn-outline" asChild>
                    <a href={block.link}>
                      {block.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have grown with
                ReachRight Marketing. Let&apos;s create your success story
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero" asChild>
                  <a href="contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button className="btn-outline" asChild>
                  <a href="pricing">View Our Packages</a>
                </Button>
              </div>

              {/* Quick Contact Links */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:hello@reachrightmarketing.com"
                  className="text-primary hover:text-primary-glow transition-colors flex items-center"
                >
                  Email Us Here
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/27765864469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors flex items-center"
                >
                  WhatsApp Us Here
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="tel:+27822227457"
                  className="text-primary hover:text-primary-glow transition-colors flex items-center"
                >
                  Call Us Now
                  <ArrowRight className="ml-2 w-4 h-4" />
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

export default Index;
```0
