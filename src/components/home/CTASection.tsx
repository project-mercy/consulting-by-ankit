import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Let's discuss how strategic consulting can help you achieve your goals 
          and create lasting impact.
        </p>
        <Button
          size="lg"
          variant="secondary"
          asChild
        >
          <Link to="/book">
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
