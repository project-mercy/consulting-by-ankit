import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Clock, Video, MessageSquare } from "lucide-react";

const packages = [
  {
    name: "Discovery Call",
    price: "Free",
    description: "A 30-minute introductory call to discuss your needs and see if we're a good fit.",
    duration: "30 minutes",
    features: [
      "Initial consultation",
      "Needs assessment",
      "Recommendations overview",
      "No commitment",
    ],
    icon: MessageSquare,
    popular: false,
  },
  {
    name: "Strategy Session",
    price: "$500",
    description: "A deep-dive session to analyze your challenges and develop actionable strategies.",
    duration: "2 hours",
    features: [
      "In-depth analysis",
      "Strategic recommendations",
      "Action plan document",
      "1 follow-up call",
    ],
    icon: Video,
    popular: true,
  },
  {
    name: "Retainer Package",
    price: "$3,000",
    description: "Ongoing consulting support for comprehensive transformation projects.",
    duration: "Monthly",
    features: [
      "8 hours of consulting",
      "Priority support",
      "Weekly check-ins",
      "Unlimited email support",
      "Custom deliverables",
    ],
    icon: Clock,
    popular: false,
  },
];

const BookingPage = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book a Consultation
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose the consultation package that best fits your needs. Let's work 
              together to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative border-border bg-card hover:shadow-lg transition-shadow duration-300 ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    {pkg.price !== "Free" && (
                      <span className="text-muted-foreground text-sm">
                        {" "}/ {pkg.duration.toLowerCase()}
                      </span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.price === "Free" ? "Schedule Now" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom engagement? Let's discuss your specific requirements.
            </p>
            <Button variant="outline" size="lg">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
