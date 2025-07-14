import React from "react";

const CardToppings = ({ Icon, title }) => {
  return (
    <>
      <div className="bg-white hover:shadow-lg shadow-md p-4 w-36  rounded-lg  text-center transition duration-300">
        <div className="mb-4">
          <div className=" rounded-full size-16 sm:size-20 md:size-24 flex items-center justify-center mx-auto">
            <Icon className="text-pink-500 text-4xl" />
          </div>
          <div className="text-center">
            <h3 className="text-gray-600 font-medium text-sm">{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardToppings;
