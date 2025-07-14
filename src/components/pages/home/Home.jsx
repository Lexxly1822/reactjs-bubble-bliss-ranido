import React from "react";
import Header from "../../partials/Header";
import Types from "./types/Types";
import Popular from "./popular/Popular";
import Toppings from "./toppings/Toppings";
import Benefits from "./benefits/Benefits";
import Contact from "./contact/Contact";
import Footer from "../../partials/Footer";

const Home = () => {
  return (
    <>
      <div className="font-sans bg-gray-50">
        <Header />
        <Types />
        <Popular />
        <Toppings />
        <Benefits />
        <Contact />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
