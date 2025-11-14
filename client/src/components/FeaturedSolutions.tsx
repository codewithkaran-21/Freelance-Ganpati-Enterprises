import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import solarImage from "@assets/generated_images/Solar_panel_rooftop_installation_024672e4.png";
import cctvImage from "@assets/generated_images/CCTV_security_camera_system_afacb102.png";
import inverterImage from "@assets/generated_images/Inverter_battery_backup_system_0b30e922.png";

const solutions = [
  {
    title: "Solar Panel Systems",
    description: "Harness the power of the sun with our premium on-grid and off-grid solar solutions. Reduce your electricity bills while contributing to a sustainable future.",
    features: [
      "DCR certified bi-facial modules",
      "Net metering support",
      "Complete installation included",
      "Post-installation support",
    ],
    image: solarImage,
    imagePosition: "left" as const,
  },
  {
    title: "CCTV Security Solutions",
    description: "Protect your property with advanced surveillance systems featuring HD cameras, night vision, and remote monitoring capabilities for complete peace of mind.",
    features: [
      "HD & 4K camera options",
      "Night vision capability",
      "Mobile app monitoring",
      "Professional installation",
    ],
    image: cctvImage,
    imagePosition: "right" as const,
  },
  {
    title: "Battery Backup Systems",
    description: "Never face power outages again with our reliable inverter and battery solutions. Perfect for homes and businesses requiring uninterrupted power supply.",
    features: [
      "Long-lasting batteries",
      "Automatic switching",
      "Low maintenance",
      "Wide capacity range",
    ],
    image: inverterImage,
    imagePosition: "left" as const,
  },
];

export default function FeaturedSolutions() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Solutions</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our most popular products designed for reliability and efficiency
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                solution.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`solution-${index}`}
            >
              <div className="lg:w-1/2">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">{solution.title}</h3>
                <p className="mb-6 text-lg text-muted-foreground">{solution.description}</p>

                <ul className="mb-6 space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={scrollToContact} data-testid={`button-request-quote-${index}`}>
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
