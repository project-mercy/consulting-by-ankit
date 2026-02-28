import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, BookOpen } from "lucide-react";
import coreValuesBg from "@/assets/core-values-bg.jpg";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Countries Served", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground">
              A passionate consultant dedicated to helping organizations navigate 
              complex challenges and create meaningful impact.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Bridging Technology, Business & Sustainability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over a decade of experience across multiple industries, I've 
                  developed a unique perspective that combines technical expertise 
                  with strategic business acumen and a deep commitment to sustainable 
                  practices.
                </p>
                <p>
                  My approach is rooted in understanding each client's unique context 
                  and challenges. I believe that the best solutions emerge from 
                  collaborative partnerships, where diverse perspectives come together 
                  to create innovative outcomes.
                </p>
                <p>
                  Whether you're looking to modernize your technology stack, develop 
                  a growth strategy, or build a more sustainable organization, I'm 
                  here to guide you through the journey.
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/book">
                  Work With Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div
            className="relative rounded-xl p-8 md:p-12 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${coreValuesBg})` }}
          >
            <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
            <h3 className="relative text-2xl font-bold text-foreground text-center mb-10">
              Core Values
            </h3>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Delivering exceptional quality in every engagement
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Working together to achieve shared goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Creating meaningful change that lasts
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously growing and adapting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
