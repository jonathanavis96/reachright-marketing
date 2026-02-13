// src/pages/ThankYou.tsx
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Calendar } from "lucide-react";
import Seo from "@/components/Seo";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  const planNames: Record<string, string> = {
    basic: "Basic Package",
    standard: "Standard Package",
    premium: "Premium Package",
  };

  const displayPlan = plan ? planNames[plan.toLowerCase()] || plan : "your selected package";

  return (
    <>
      <Seo
        title="Thank You — ReachRight Marketing"
        description="Thank you for subscribing to ReachRight Marketing. We're excited to help grow your business!"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 section-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Thank You for <span className="text-primary">Subscribing!</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                Your subscription to the <strong>{displayPlan}</strong> has been confirmed.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're thrilled to have you on board and can't wait to help your business reach new heights!
              </p>
            </div>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Happens Next?</h2>
              <p className="text-muted-foreground">Here's what you can expect in the coming days</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="marketing-card text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">1. Welcome Email</h3>
                <p className="text-muted-foreground">
                  You'll receive a welcome email with all the details about your subscription and next steps.
                </p>
              </div>

              <div className="marketing-card text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">2. Strategy Call</h3>
                <p className="text-muted-foreground">
                  Our team will reach out to schedule your onboarding call and discuss your marketing goals.
                </p>
              </div>

              <div className="marketing-card text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">3. We Get Started</h3>
                <p className="text-muted-foreground">
                  Once we understand your needs, we'll begin executing your customized marketing strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 section-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="marketing-card text-center animate-fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our team is here to help. Feel free to reach out if you have any questions about your subscription.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button className="btn-outline" asChild>
                  <a href="/">Return Home</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ThankYou;
