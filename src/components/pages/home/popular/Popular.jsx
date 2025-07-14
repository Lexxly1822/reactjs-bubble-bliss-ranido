import React from "react";
import CardPopular from "../../../partials/CardPopular";

const Popular = () => {
  return (
    <>
      <section id="#popular" className="bg-gray-50 py-20 ">
        <div className="px-4  mx-auto max-w-8xl">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4 font-bold text-3xl">
              Popular <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Milk Tea </span>
              Types
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            <CardPopular
              icon={" 🥛"}
              title={"Classic Milk Tea"}
              description={
                "The original blend of black tea, milk, and sweetness that started it all."
              }
            />
            <CardPopular
              icon={"🍯"}
              title={"Honeydew Milk Tea"}
              description={
                "Refreshing melon flavor combined with creamy milk for a summer favorite."
              }
            />
            <CardPopular
              icon={"🍵"}
              title={"Matcha Milk Tea"}
              description={
                "Earthy green tea powder blended with milk for an antioxidant boost."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
