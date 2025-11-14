import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedSolutions />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
