import { SiWhatsapp, SiFacebook, SiInstagram } from "react-icons/si";
import logoImage from "@assets/generated_images/Lord_Ganesha_business_logo_e2e60418.png";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logoImage} alt="Ganpati Enterprises" className="h-12 w-12" />
              <span className="text-lg font-semibold">Ganpati Enterprises</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Your trusted partner for energy and security solutions in Lucknow. Quality products, professional installation, and exceptional service.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/916392133510"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-testid="link-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-testid="link-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-foreground" data-testid="button-footer-home">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground" data-testid="button-footer-products">
                  Products & Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("solutions")} className="text-muted-foreground hover:text-foreground" data-testid="button-footer-solutions">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground" data-testid="button-footer-about">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground" data-testid="button-footer-contact">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:6392133510" className="hover:text-foreground" data-testid="link-footer-phone-1">
                  Phone: 6392133510
                </a>
              </li>
              <li>
                <a href="tel:7800509693" className="hover:text-foreground" data-testid="link-footer-phone-2">
                  Phone: 7800509693
                </a>
              </li>
              <li>
                <a href="mailto:ganpatienterprises864@gmail.com" className="hover:text-foreground" data-testid="link-footer-email">
                  ganpatienterprises864@gmail.com
                </a>
              </li>
              <li className="pt-2">
                Shop no.3 Yadav Market<br />
                Opposite Janta Vidyalaya<br />
                Guramba Kursi Road<br />
                Lucknow - 226026
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© 2025 Ganpati Enterprises. All rights reserved.</p>
            <p>GSTIN: 09BANPS9378H1Z0</p>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Deals in: Inverter, Battery, UPS, CCTV Camera Security, Fire Alarm, Solar Energy
          </p>
        </div>
      </div>
    </footer>
  );
}
