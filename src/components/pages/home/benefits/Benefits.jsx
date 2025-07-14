import React from "react";
import { FaCheck, FaClipboardCheck, FaHeart } from "react-icons/fa";
import { PiCheckThin } from "react-icons/pi";

const Benefits = () => {
  return (
    <>
      {/* Benefits */}
      <section id="#benefits" className="bg-white py-20 mx-auto px-4">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-black-800  font-bold text-3xl mb-4">
                Why{" "}
                <span className=" bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Milk Tea
                </span>{" "}
                is Good For You
              </h2>
              <div>
                <ul>
                  <li className="flex gap-2 mb-4">
                    <div className="flex items-center ">
                      <PiCheckThin className="text-pink-500 bg-pink-100 text-2xl rounded-full" />
                    </div>
                    <div className="leading-none">
                      <div className="text-black font-bold">
                        <small> Antioxidant Rich</small>
                      </div>
                      <div className="text-gray-600">
                        <small>
                          Tea contains polyphenols that help fight free
                          radicals.
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-2 mb-4">
                    <div className="flex items-center ">
                      <PiCheckThin className="text-purple-500 bg-purple-100 text-2xl rounded-full" />
                    </div>
                    <div className="leading-none">
                      <div className="text-black font-bold">
                        <small> Energy Boost</small>
                      </div>
                      <div className="text-gray-600">
                        <small>
                          Natural caffeine provides a gentle lift without coffee
                          jitters.
                        </small>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <div className="flex items-center ">
                      <PiCheckThin className="text-yellow-500 bg-yellow-100 text-2xl rounded-full" />
                    </div>
                    <div className="leading-none">
                      <div className="text-black font-bold">
                        <small>Mood Enhancer</small>
                      </div>
                      <div className="text-gray-600">
                        <small>
                          The comforting warmth and sweetness can brighten your
                          day.
                        </small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" ">
              <div className=" bg-pink-100 size-60 p-8 rounded-xl mb-6 mx-auto">
                <ul>
                  <li className="items-center justify-center text-center text-6xl mb-2">
                    💖
                  </li>
                  <p className="text-gray-800 font-semibold ">
                    "A cup of milk tea a day keeps the stress away!"
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
