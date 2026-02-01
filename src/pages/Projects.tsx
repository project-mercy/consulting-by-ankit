import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Monitor, TrendingUp, Leaf } from "lucide-react";

const projects = [
  {
    title: "Digital Transformation for Fortune 500",
    category: "Technology",
    icon: Monitor,
    description:
      "Led a comprehensive digital transformation initiative, modernizing legacy systems and implementing cloud-native solutions that reduced operational costs by 40%.",
    tags: ["Cloud Migration", "Microservices", "DevOps"],
    outcome: "40% cost reduction",
  },
  {
    title: "Market Expansion Strategy",
    category: "Business",
    icon: TrendingUp,
    description:
      "Developed and executed a market entry strategy for a SaaS company expanding into European markets, resulting in 3x revenue growth within 18 months.",
    tags: ["Market Analysis", "Go-to-Market", "Strategic Planning"],
    outcome: "3x revenue growth",
  },
  {
    title: "Carbon Neutral Operations",
    category: "Sustainability",
    icon: Leaf,
    description:
      "Designed and implemented a comprehensive sustainability roadmap for a manufacturing firm, achieving carbon neutrality two years ahead of schedule.",
    tags: ["ESG Strategy", "Carbon Footprint", "Supply Chain"],
    outcome: "Carbon neutral achieved",
  },
  {
    title: "AI-Powered Customer Platform",
    category: "Technology",
    icon: Monitor,
    description:
      "Architected an AI-driven customer engagement platform that increased customer satisfaction scores by 35% and reduced support costs.",
    tags: ["AI/ML", "Customer Experience", "Platform Design"],
    outcome: "35% satisfaction increase",
  },
  {
    title: "Startup Growth Advisory",
    category: "Business",
    icon: TrendingUp,
    description:
      "Provided strategic guidance to a Series A startup, helping them achieve product-market fit and secure Series B funding of $25M.",
    tags: ["Fundraising", "Product Strategy", "Scaling"],
    outcome: "$25M Series B raised",
  },
  {
    title: "Sustainable Supply Chain",
    category: "Sustainability",
    icon: Leaf,
    description:
      "Redesigned supply chain operations for a retail client, reducing waste by 60% while maintaining cost efficiency and improving supplier relationships.",
    tags: ["Circular Economy", "Waste Reduction", "Supplier Management"],
    outcome: "60% waste reduction",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of impactful projects across Technology, Business, and
              Sustainability consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-primary">
                      {project.outcome}
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

export default Projects;
