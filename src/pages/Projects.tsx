import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Monitor, TrendingUp, Leaf } from "lucide-react";

const projects = [
  {
    title: "Computer Vision in Agriculture Using Drone",
    category: "Technology",
    icon: Monitor,
    description:
      "Developed a drone-based computer vision system for precision agriculture, enabling automated crop health monitoring, pest detection, and yield estimation through advanced image analysis and machine learning models.",
    tags: ["Computer Vision", "Drones", "Machine Learning", "Agriculture"],
    outcome: "Automated crop monitoring",
  },
  {
    title: "Creating the Theory of Change for Project Mercy",
    category: "Sustainability",
    icon: Leaf,
    description:
      "Designed a comprehensive Theory of Change framework for Project Mercy, mapping out impact pathways, defining measurable outcomes, and establishing a clear logic model to guide the organization's strategic initiatives.",
    tags: ["Theory of Change", "Impact Assessment", "Strategic Planning"],
    outcome: "Strategic impact framework delivered",
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
