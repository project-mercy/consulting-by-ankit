import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    content: "Placeholder testimonial text.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    content: "Placeholder testimonial text.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    content: "Placeholder testimonial text.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    content: "Placeholder testimonial text.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    content: "Placeholder testimonial text.",
    rating: 5,
  },
  {
    name: "Bete Demeke",
    role: "CEO & President",
    company: "Project Mercy",
    content:
      "Ankit is a hard working employee and is also very funny.",
    rating: 4.5,
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
