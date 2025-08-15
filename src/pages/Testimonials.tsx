import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, BadgeCheck } from "lucide-react";

type Testimonial = {
  name: string;
  company: string;
  rating: number; // 1-5
  text: string;
  result: string;
  verified?: boolean; // show verified badge
  link?: string;      // optional hyperlink for company/logo
  logo?: string;      // optional logo path for the company
  logoAlt?: string;   // accessible alt text for the logo
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      // CES card updated
      name: "Caroline Beer",
      company: "Coastal and Environmental Services",
      rating: 5,
      text:
        "ReachRight Marketing transformed our online presence. Their expertise in social media management and SEO helped us reach new customers we never thought possible. Highly recommend!",
      result: "300% increase in online engagement",
      verified: true,
      link: "https://www.cesnet.co.za/",
      logo: "/public/assets/img/logos/CESlogo.png",   // <-- update to your actual asset path
      logoAlt: "CES (Coastal and Environmental Services) logo"
    },
    {
      name: "Sarah Mitchell",
      company: "Mitchell & Associates",
      rating: 5,
      text:
        "Working with ReachRight has been a game-changer for our law firm. Their professional approach and understanding of our industry helped us build trust with potential clients online.",
      result: "80% increase in qualified leads"
    },
    {
      name: "David Thompson",
      company: "Thompson Construction",
      rating: 5,
      text:
        "As a small construction company, we thought digital marketing was too complex for us. ReachRight made it simple and affordable. Our phone hasn't stopped ringing since we started!",
      result: "140% increase in project inquiries"
    },
    {
      name: "Samantha Price",
      company: "Seaside Bistro",
      rating: 4,
      text:
        "The social media content ReachRight creates for our restaurant is absolutely amazing. Our followers love the posts, and we've seen a significant increase in reservations and takeout orders.",
      result: "120% increase in social media followers"
    },
    {
      name: "James Wilson",
      company: "Wilson Tech Solutions",
      rating: 5,
      text:
        "ReachRight's technical expertise and understanding of B2B marketing helped us establish credibility in the tech industry. Their LinkedIn strategy alone brought us several new enterprise clients.",
      result: "200% increase in LinkedIn engagement"
    },
    {
      name: "Lisa Chen",
      company: "Chen Beauty Salon",
      rating: 5,
      text:
        "The branding work ReachRight did for us was exceptional. They captured our salon's personality perfectly, and the new brand identity has attracted so many new clients.",
      result: "80% increase in new client bookings"
    }
  ];

  const stats = [
    { number: "20+", label: "Happy Clients" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "150%", label: "Average Growth" },
    { number: "24/7", label: "Support Available" }
  ];

  const MAX_STARS = 5;

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
                <div className="text-muted-foreground font-medium">{stat.label}</div>
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
