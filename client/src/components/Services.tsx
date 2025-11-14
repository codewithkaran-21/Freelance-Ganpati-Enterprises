import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, CameraIcon, Flame, Shield, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Inverters & UPS",
    description: "High-quality power backup solutions for homes and businesses with reliable performance.",
  },
  {
    icon: Battery,
    title: "Batteries",
    description: "Premium batteries with long life and efficient energy storage for all applications.",
  },
  {
    icon: CameraIcon,
    title: "CCTV Security",
    description: "Advanced surveillance systems with HD cameras and remote monitoring capabilities.",
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    description: "Professional fire detection and alarm systems ensuring safety and compliance.",
  },
  {
    icon: Sun,
    title: "Solar Panels",
    description: "On-grid and off-grid solar solutions for sustainable and cost-effective energy.",
  },
  {
    icon: Shield,
    title: "Insurance Services",
    description: "Comprehensive insurance solutions to protect your investments and assets.",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Products & Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive energy and security solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary" onClick={scrollToContact} data-testid={`button-learn-more-${index}`}>
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
