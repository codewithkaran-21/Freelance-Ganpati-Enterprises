import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import heroImage from "@assets/generated_images/Energy_infrastructure_hero_background_969f8570.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-6 bg-background/20 backdrop-blur-md border-white/20 text-white" data-testid="badge-gstin">
          <Shield className="mr-2 h-3 w-3" />
          Authorized Dealer | GSTIN: 09BANPS9378H1Z0
        </Badge>

        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          Powering Lucknow's Future
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Your Trusted Partner for Inverters, Batteries, Solar Panels, CCTV Security, Fire Alarms & Insurance Services
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground backdrop-blur-md hover:bg-primary/90 border-primary-border"
            onClick={() => scrollToSection("contact")}
            data-testid="button-get-quote"
          >
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 text-white backdrop-blur-md border-white/30 hover:bg-background/20"
            onClick={() => scrollToSection("services")}
            data-testid="button-view-products"
          >
            View Products
          </Button>
        </div>
      </div>
    </section>
  );
}
