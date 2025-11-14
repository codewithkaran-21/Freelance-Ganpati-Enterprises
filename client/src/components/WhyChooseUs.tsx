import { Card, CardContent } from "@/components/ui/card";
import { Award, HeadphonesIcon, Shield, Wrench } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted expertise in energy and security solutions across Lucknow",
  },
  {
    icon: Shield,
    title: "Authorized Dealer",
    description: "Certified dealer of premium brands with genuine products",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation team ensuring perfect setup every time",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-Sales Support",
    description: "Dedicated customer support for maintenance and queries",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Ganpati Enterprises</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your satisfaction is our priority, backed by quality products and exceptional service
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
