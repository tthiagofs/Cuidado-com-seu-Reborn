
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Content from "@/components/Content";
import Author from "@/components/Author";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Content />
      <Author />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
