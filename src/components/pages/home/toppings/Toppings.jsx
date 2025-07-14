import React from "react";
import CardToppings from "../../../partials/CardToppings";

const Toppings = () => {
  return (
    <>
      <section id="#toppings" className="bg-purple-50 py-12  ">
        <div className="px-4 mx-auto max-w-4xl ">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4 font-bold text-3xl">
              Delicious{" "}
              <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Toppings
              </span>
            </h2>
            <small>
              Customize your milk tea with these tasty additions that add
              texture and flavor.
            </small>
          </div>
          <div className=" flex flex-wrap justify-center gap-2 mt-2 px-2 ">
            <CardToppings
              Icon={() => (
                <span className="text-2xl bg-pink-100 rounded-full size-12 text-center py-2 ">
                  🟤
                </span>
              )}
              title={"Bobba Pearls"}
            />
            <CardToppings
              Icon={() => (
                <span className="text-2xl bg-yellow-100 rounded-full size-12 text-center py-2">
                  🍮
                </span>
              )}
              title={"Pudding"}
            />
            <CardToppings
              Icon={() => (
                <span className="text-2xl bg-pink-50 rounded-full size-12 text-center py-2">
                  🧊
                </span>
              )}
              title={"Jelly"}
            />
            <CardToppings
              Icon={() => (
                <span className="text-2xl bg-green-100 rounded-full size-12 text-center py-2">
                  🥥
                </span>
              )}
              title={"Coconut"}
            />
            <CardToppings
              Icon={() => (
                <span className="text-2xl bg-blue-200 rounded-full size-12 text-center py-2">
                  🧈
                </span>
              )}
              title={"Cheese Foam"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Toppings;
