import React, { Suspense, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import StarSection from "./Components/StarSection/StarSection";
import GetStartedSection from "./Components/GetStartedSection/GetStartedSection";
import PricingSection from "./Components/PricingSection/PricingSection";
import WorkFlowSection from "./Components/WorkFlowSection/WorkFlowSection";
import Footer from "./Components/Footer/Footer";
import ProductsSection from "./Components/ProductsSection/ProductsSection";

const fetchProducts = async () => {
  const res = await fetch("./Data.json");
  return res.json();
};

const App = () => {
  const productsPromise = fetchProducts();

  const [totalCart, setTotalCart] = useState([]);
  const [activeButton, setActiveButton] = useState(111);

  return (
    <div>
      <Navbar totalCart={totalCart} />
      <HeroSection />
      <StarSection />

      <Suspense
        fallback={
          <span className="loading loading-dots loading-xl block mx-auto"></span>
        }
      >
        <ProductsSection
          productsPromise={productsPromise}
          totalCart={totalCart}
          setTotalCart={setTotalCart}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        ></ProductsSection>
      </Suspense>

      <GetStartedSection />
      <PricingSection />
      <WorkFlowSection />

      <Footer />
    </div>
  );
};

export default App;
