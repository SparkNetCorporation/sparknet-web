import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Portfolio />
      <WhyChooseUs/>
    </>
  );
};

export default HomePage;