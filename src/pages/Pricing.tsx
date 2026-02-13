// src/pages/Pricing.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Seo from "@/components/Seo";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Package",
      price: "R2,999",
      numericPrice: 2999,
      currency: "ZAR",
      period: "/month",
      description: "Perfect for SMEs needing essential marketing foundation",
      features: [
        "Social media branding (Facebook & Instagram)",
        "1 tailored weekly post per platform",
        "Basic monitoring & engagement",
        "Content scheduling",
        "Partial online reputation management",
        "Monthly performance report",
      ],
      popular: false,
      cta: "Subscribe Now",
      paymentUrl: "https://paystack.shop/pay/reachright-basic",
    },
    {
      name: "Standard Package",
      price: "R3,999",
      numericPrice: 3999,
      currency: "ZAR",
      period: "/month",
      description: "Ideal for expanding SMEs ready to grow their presence",
      features: [
        "All Basic features included",
        "LinkedIn & Twitter (X) management",
        "2 tailored weekly posts per platform",
        "Engaging content creation & curation",
        "Hashtag research & implementation",
        "Performance tracking & detailed reporting",
        "Basic SEO services",
        "Email marketing setup",
      ],
      popular: true,
      cta: "Subscribe Now",
      paymentUrl: "https://paystack.shop/pay/reachright-standard",
    },
    {
      name: "Premium Package",
      price: "R9,999",
      numericPrice: 9999,
      currency: "ZAR",
      period: "/month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "All Standard features included",
        "Influencer partnership coordination",
        "Advanced competitor analysis",
        "Multi-platform campaign integration",
        "Advanced social listening & sentiment analysis",
        "Unlimited AI-generated images",
        "Priority support & consultation",
        "Custom strategy development",
        "Advanced SEO & content marketing",
      ],
      popular: false,
      cta: "Subscribe Now",
      paymentUrl: "https://paystack.shop/pay/reachright-premium",
    },
  ];

  return (
    <>
      <Seo
        title="Pricing — ReachRight Marketing"
        description="Simple, transparent pricing for digital marketing services. Choose Basic, Standard, or Premium monthly packages tailored to your business."
        // canonical auto-normalizes /?/pricing → /pricing via Seo.tsx
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProductCollection",
          name: "ReachRight Marketing Packages",
          url:
            typeof window !== "undefined"
              ? window.location.href
              : "https://reachrightmarketing.com/pricing",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Monthly Packages",
            itemListElement: pricingPlans.map((p) => ({
              "@type": "Offer",
              name: p.name,
              price: String(p.numericPrice),
              priceCurrency: p.currency,
              availability: "https://schema.org/InStock",
              category: "https://schema.org/BusinessService",
              url: p.paymentUrl,
              // Optional hint about billing period:
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                unitCode: "MON", // per month
                value: 1,
              },
            })),
          },
        }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple, <span className="text-primary">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the package that fits your business needs. All plans include dedicated support and measurable
                results.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 -mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing-card animate-scale-in ${plan.popular ? "featured" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${plan.popular ? "btn-hero" : "btn-outline"}`} asChild>
                    <a href={plan.paymentUrl} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 section-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="marketing-card text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every business is unique. If our standard packages don't perfectly fit your needs, we're happy to create
                a custom solution tailored specifically for your business goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero" asChild>
                  <a href="contact">Discuss Custom Package</a>
                </Button>
                <Button className="btn-outline" asChild>
                  <a href="services">View All Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">What's included in setup?</h3>
                <p className="text-muted-foreground">
                  All packages include complete account setup, initial strategy consultation, and onboarding to ensure
                  you're ready to see results from day one.
                </p>
              </div>

              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">Can I upgrade or downgrade?</h3>
                <p className="text-muted-foreground">
                  Absolutely! You can change your package at any time to better suit your business needs as you grow.
                </p>
              </div>

              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">What platforms do you manage?</h3>
                <p className="text-muted-foreground">
                  We manage Facebook, Instagram, LinkedIn, Twitter/X, and can expand to other platforms based on your
                  business needs.
                </p>
              </div>

              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">How do you measure success?</h3>
                <p className="text-muted-foreground">
                  We provide detailed monthly reports covering engagement, reach, growth, and ROI metrics tailored to
                  your business objectives.
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

export default Pricing;
