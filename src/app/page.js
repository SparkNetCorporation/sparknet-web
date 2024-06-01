import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";

const HomePage = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Portfolio/>
    </>
  );
};

export default HomePage;