import React from "react";
import Header from "../../partials/Header";
import Types from "./types/Types";

const Home = () => {
  return (
    <>
      <div className="font-sans bg-gray-50">
        <Header />
        <Types/>
      </div>
    </>
  );
};

export default Home;
