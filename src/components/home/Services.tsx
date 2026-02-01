import { Monitor, TrendingUp, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Technology Consulting",
    description:
      "Digital transformation, software architecture, and technology strategy to modernize your operations and drive innovation.",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description:
      "Strategic planning, market analysis, and growth optimization to help your business reach its full potential.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "ESG strategy, sustainable operations, and impact measurement to build a future-ready, responsible business.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas of Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive consulting services tailored to your unique challenges 
            and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
