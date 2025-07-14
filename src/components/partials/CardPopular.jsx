import React from "react";

const CardPopular = ({ icon, title, description }) => {
  return (
    <>
      {/* Card Popular Types of MilkTea */}
      <div className="bg-pink-50 hover:shadow-lg shadow-md p-8 rounded-lg transition duration-300">
        <div>
          <div className=" size-24 rounded-full flex items-center justify-center mb-6 mx-auto">
            <span className="text-2xl bg-pink-200 rounded-full size-12 text-center py-2 ">
             {icon}
            </span>
          </div>
          <div className="text-center">
            <h3 className="text-gray-600 font-bold text-xl mb-3">{title}</h3>
            <p className="text-gray-600 mt-4">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPopular;
