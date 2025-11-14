import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImage from "@assets/generated_images/Ganpati_Enterprises_logo_design_fe3f1eed.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Ganpati Enterprises" className="h-10 w-10 rounded-md" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground">Ganpati Enterprises</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Your Energy Partner</span>
          </div>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" onClick={() => scrollToSection("home")} data-testid="link-home">
            Home
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("services")} data-testid="link-services">
            Services
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("solutions")} data-testid="link-solutions">
            Solutions
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("about")} data-testid="link-about">
            About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")} data-testid="link-contact">
            Contact
          </Button>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="tel:6392133510" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" />
            <span className="font-medium">6392133510</span>
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-menu-toggle"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("home")} data-testid="link-home-mobile">
              Home
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("services")} data-testid="link-services-mobile">
              Services
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("solutions")} data-testid="link-solutions-mobile">
              Solutions
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("about")} data-testid="link-about-mobile">
              About
            </Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("contact")} data-testid="link-contact-mobile">
              Contact
            </Button>
            <div className="pt-2 border-t">
              <a href="tel:6392133510" className="flex items-center gap-2 py-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>6392133510</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
