import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "CES",
      company: "Local Business",
      rating: 5,
      text: "ReachRight Marketing transformed our online presence. Their expertise in social media management and SEO helped us reach new customers we never thought possible. Highly recommend!",
      result: "300% increase in online engagement"
    },
    {
      name: "Sarah Mitchell",
      company: "Mitchell & Associates",
      rating: 5,
      text: "Working with ReachRight has been a game-changer for our law firm. Their professional approach and understanding of our industry helped us build trust with potential clients online.",
      result: "250% increase in qualified leads"
    },
    {
      name: "David Thompson",
      company: "Thompson Construction",
      rating: 5,
      text: "As a small construction company, we thought digital marketing was too complex for us. ReachRight made it simple and affordable. Our phone hasn't stopped ringing since we started!",
      result: "400% increase in project inquiries"
    },
    {
      name: "Maria Rodriguez",
      company: "Rodriguez Restaurant",
      rating: 5,
      text: "The social media content ReachRight creates for our restaurant is absolutely amazing. Our followers love the posts, and we've seen a significant increase in reservations and takeout orders.",
      result: "180% increase in social media followers"
    },
    {
      name: "James Wilson",
      company: "Wilson Tech Solutions",
      rating: 5,
      text: "ReachRight's technical expertise and understanding of B2B marketing helped us establish credibility in the tech industry. Their LinkedIn strategy alone brought us 5 new enterprise clients.",
      result: "500% increase in LinkedIn engagement"
    },
    {
      name: "Lisa Chen",
      company: "Chen Beauty Salon",
      rating: 5,
      text: "The branding work ReachRight did for us was exceptional. They captured our salon's personality perfectly, and the new brand identity has attracted so many new clients.",
      result: "220% increase in new client bookings"
    }
  ];

  const stats = [
    { number: "150+", label: "Happy Clients" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "300%", label: "Average Growth" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
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
              See how we've helped SMEs grow and thrive through personalized marketing strategies
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
                className="marketing-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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
              Let's create a success story for your business. Get started with a free consultation 
              and discover how we can help you achieve your marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-hero inline-flex items-center justify-center text-center"
              >
                Start Your Success Story
              </a>
              <a 
                href="/pricing" 
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
              <h3 className="text-xl font-bold text-foreground mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We learn about your business, goals, and target audience
              </p>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                We create a customized marketing strategy for your success
              </p>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Execute</h3>
              <p className="text-muted-foreground">
                We implement and manage your marketing campaigns
              </p>
            </div>
            
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Optimize</h3>
              <p className="text-muted-foreground">
                We continuously improve and scale your results
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;