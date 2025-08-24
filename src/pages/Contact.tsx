// src/pages/Contact.tsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo"; // ✅ SEO
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblkerqk";

type FormData = {
  name: string;
  email: string;
  phone: string;
  package: string;
  message: string;
  /** Honeypot (bots fill this; humans won't). */
  company?: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const packageFromUrl = searchParams.get("package");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
    company: "" // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    "Basic Package",
    "Standard Package",
    "Premium Package",
    "Custom Package",
    "General Inquiry"
  ];

  useEffect(() => {
    if (packageFromUrl) {
      setFormData(prev => ({
        ...prev,
        package: packageFromUrl,
        message: `Hi, I'm interested in the ${packageFromUrl}. Please provide more information about this package and how we can get started.`
      }));
    }
  }, [packageFromUrl]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePackageChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      package: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple client-side guard
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    // Honeypot check (if filled, likely a bot; silently succeed)
    if (formData.company && formData.company.trim().length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Formspree JSON API
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New ReachRight inquiry${formData.package ? ` — ${formData.package}` : ""}`,
          _source: "reachright-marketing/contact",
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          package: "",
          message: "",
          company: ""
        });
      } else {
        const data = await response.json().catch(() => null);
        const errorMsg =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        toast({
          title: "Error",
          description: errorMsg,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@reachrightmarketing.com",
      action: "mailto:hello@reachrightmarketing.com",
      cta: "Email Us Here"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+27 82 222 7457",
      action: "tel:+27822227457",
      cta: "Call Now"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      value: "+27 76 586 4469",
      action: "https://wa.me/27765864469",
      cta: "WhatsApp Us Here"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <>
      <Seo
        title="Contact — ReachRight Marketing"
        description="Get in touch with ReachRight Marketing. Email, call, or WhatsApp us to discuss how we can help grow your business with digital marketing."
        // canonical auto-normalizes /?/contact → /contact via Seo.tsx
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your business with expert digital marketing? Let's start the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in-up">
                <div className="marketing-card">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Honeypot (hidden) */}
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+27 82 222 7457"
                      />
                    </div>

                    <div>
                      <Label htmlFor="package">Package Interest</Label>
                      <Select value={formData.package} onValueChange={handlePackageChange}>
                        <SelectTrigger className="mt-1" id="package" aria-label="Package Interest">
                          <SelectValue placeholder="Select a package you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          {packages.map((pkg) => (
                            <SelectItem key={pkg} value={pkg}>
                              {pkg}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        rows={5}
                        placeholder="Tell us about your business and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="btn-hero w-full"
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="animate-scale-in">
                <div className="space-y-8">
                  {/* Contact Methods */}
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="marketing-card">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                              {info.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{info.title}</h3>
                              <p className="text-sm text-muted-foreground">{info.description}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-3">{info.value}</p>
                          <a
                            href={info.action}
                            target={info.action.startsWith("http") ? "_blank" : "_self"}
                            rel={info.action.startsWith("http") ? "noopener noreferrer" : ""}
                            className="btn-outline inline-flex items-center justify-center"
                          >
                            {info.cta}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="marketing-card">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
                    </div>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium text-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="marketing-card">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">Location</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Proudly serving businesses across South Africa and beyond.
                      Remote consultations available worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 section-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">How quickly can we get started?</h3>
                <p className="text-muted-foreground">
                  We can begin working on your project within 24-48 hours of our initial consultation.
                  Setup typically takes 1-2 weeks depending on the package.
                </p>
              </div>

              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">Do you work with international clients?</h3>
                <p className="text-muted-foreground">
                  Yes! While we're based in South Africa, we work with clients globally.
                  All consultations can be conducted remotely via video call.
                </p>
              </div>

              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">What if I'm not satisfied with the results?</h3>
                <p className="text-muted-foreground">
                  We're committed to your success. We offer regular reviews and strategy
                  adjustments to ensure you're seeing the results you expect.
                </p>
              </div>

              <div className="marketing-card animate-scale-in">
                <h3 className="font-semibold text-foreground mb-3">Can I speak with past clients?</h3>
                <p className="text-muted-foreground">
                  We'd be happy to connect you with past clients who can share their experience.
                  Just ask during your consultation call.
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

export default Contact;
