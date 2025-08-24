// src/pages/About.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailored Marketing Solutions",
      description:
        "Customized strategies designed specifically for your business needs and goals.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Affordable for All Business Sizes",
      description:
        "From sole proprietorships to enterprises, we have packages that fit every budget.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expertise in Digital Marketing",
      description:
        "Specialized knowledge in social media, SEO, branding, and content creation.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent Communication",
      description:
        "Clear reporting, honest feedback, and open communication throughout our partnership.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About — ReachRight Marketing",
    url:
      typeof window !== "undefined"
        ? window.location.href
        : "https://reachrightmarketing.com/about",
    isPartOf: {
      "@type": "WebSite",
      name: "ReachRight Marketing",
      url: "https://reachrightmarketing.com",
    },
  };

  return (
    <>
      <Seo
        title="About — ReachRight Marketing"
        description="Founded in 2023 to empower businesses of all sizes with accessible, effective digital marketing — social, SEO, branding and content."
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">ReachRight Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Founded in 2023 with a mission to empower businesses through
                innovative digital marketing solutions
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story &amp; Mission
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    ReachRight Marketing was founded in 2023 by Jonathan Avis
                    with a clear vision: to empower businesses of all sizes with
                    innovative and accessible digital marketing solutions. We
                    understand that in today&apos;s competitive landscape,
                    having a strong online presence isn&apos;t just
                    beneficial—it&apos;s essential.
                  </p>
                  <p>
                    While we specialize in supporting small and medium
                    enterprises (SMEs), our expertise extends to businesses of
                    all sizes. We believe that every company, regardless of its
                    scale, deserves access to professional marketing strategies
                    that drive real results.
                  </p>
                  <p>
                    Our approach is built on creating personalized strategies
                    that align with your unique business goals. We don&apos;t
                    believe in one-size-fits-all solutions. Instead, we take the
                    time to understand your brand, your audience, and your
                    objectives to craft campaigns that truly resonate.
                  </p>
                  <p>
                    At ReachRight Marketing, we&apos;re more than just service
                    providers—we&apos;re your strategic partners. Our team is
                    dedicated to building lasting relationships based on trust,
                    transparency, and measurable results. We&apos;re committed
                    to helping your business not just survive, but thrive in the
                    digital age.
                  </p>
                </div>
              </div>

              <div className="animate-scale-in">
                <div className="marketing-card">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="marketing-card text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Relationship-Driven
                </h3>
                <p className="text-muted-foreground">
                  We build lasting partnerships with our clients, focusing on
                  long-term success rather than quick wins.
                </p>
              </div>

              <div className="marketing-card text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Results-Focused
                </h3>
                <p className="text-muted-foreground">
                  Every strategy we implement is designed to deliver measurable
                  results that impact your bottom line.
                </p>
              </div>

              <div className="marketing-card text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  We stay ahead of digital trends to ensure your marketing
                  strategies remain cutting-edge and effective.
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

export default About;
