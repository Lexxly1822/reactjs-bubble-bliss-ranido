import React from "react";

const Types = () => {
  return (
    <>
      <section className="bg-pink-100 py-36 ">
        <div className="container mx-auto justify-betweentext-center  relative z-10 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4  ">
            Discover the{" "}
            <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold ">
              Joy
            </span>{" "}
            of Milk Tea
          </h1>
          <p className="mb-5 text-gray-500">
            Creamy, sweet, and refreshing our milk tea will transport you to
            flavor paradise with every sip.
          </p>
          <button className="rounded-full bg-pink-500 text-white font-bold py-5 px-4">Explore Flavor</button>
        </div>
      </section>
    </>
  );
};

export default Types;
