import Banner from "../components/home/Banner";
import Footer from "../components/Footer";
import Dscription from "../components/home/Description";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Dscription />
      <Footer />
    </div>
  );
};
export default Home;
