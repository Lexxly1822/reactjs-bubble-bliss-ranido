import React from "react";

const Types = () => {
  return (
    <>
      <section className="bg-pink-100 py-36 ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto justify-between   relative z-10 gap-6">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold mb-4 ">
                Discover the{" "}
                <span className="  bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold ">
                  Joy
                </span>{" "}
                of Milk Tea
              </h1>
              <p className="mb-5 text-gray-500">
                Creamy, sweet, and refreshing our milk tea will transport you to
                flavor paradise with every sip.
              </p>

              <button className="rounded-full bg-pink-500 text-white font-bold py-4 px-4">
                Explore Flavor
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="rounded-full w-44 h-44 bg-pink-200 blur-lg "></div>
              <p className="text-8xl absolute top-0 ">🧋</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Types;
