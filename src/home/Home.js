import { HeroSection } from "../hero/HeroSection";
import { Footer } from "../layout/Footer";
import Header from "../layout/Header";

export const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};
