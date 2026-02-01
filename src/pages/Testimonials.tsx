import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "Working with this consultant was transformative for our business. Their strategic guidance helped us secure our Series B funding and establish a clear path to profitability. Highly recommended for any startup looking to scale.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "CTO",
    company: "GlobalFinance Corp",
    content:
      "The digital transformation roadmap we developed together has completely modernized our operations. We've seen a 40% reduction in operational costs and significantly improved customer satisfaction.",
    rating: 5,
  },
  {
    name: "Emma Larsson",
    role: "Sustainability Director",
    company: "Nordic Manufacturing",
    content:
      "Their expertise in sustainability consulting was exactly what we needed. They helped us achieve our carbon neutrality goals two years ahead of schedule, all while maintaining profitability.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Founder",
    company: "GreenTech Solutions",
    content:
      "An exceptional consultant who truly understands the intersection of technology and sustainability. Their insights helped us build a product that's both innovative and environmentally responsible.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "VP of Strategy",
    company: "Retail Dynamics",
    content:
      "The market expansion strategy was brilliantly executed. We successfully entered three new European markets and exceeded our growth targets by 150%. A true strategic partner.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Managing Director",
    company: "Capital Ventures",
    content:
      "I've worked with many consultants over the years, but few have delivered the level of insight and practical value that I experienced here. They truly understand what it takes to build lasting success.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Testimonials
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from the organizations I've had the privilege of working with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
