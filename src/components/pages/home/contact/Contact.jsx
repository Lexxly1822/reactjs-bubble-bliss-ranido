import React from "react";

const Contact = () => {
  return (
    <>
      <section id="#contact" className="py-16 bg-pink-200 ">
        <div className="container mx-auto px-4 justify-items-center ">
          <h2 className="text-3xl font-bold text-center mb-4 ">
            Get Your{" "}
            <span className="text-3xl  font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Milk Tea{" "}
            </span>{" "}
            Fix
          </h2>
          <p className="  text-gray-500 mb-4 text-center">
            Have questions or want to share your favorite flavor? We'd love to
            hear from you!
          </p>
          <div className="bg-white py-20 p-6 rounded-lg max-w-6xl w-full  ">
            <form action="space-y-4">
              <div className=" flex flex-col md:flex-row gap-6 mb-4 ">
                <div className="flex-1">
                  <label htmlFor="name" className="">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Jane Deo"
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white border border-gray-400"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="name" className="">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white-500 border border-gray-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="">
                  Subject
                </label>
                <input
                  type="email"
                  placeholder="What's this about?"
                  className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white-500 border border-gray-400"
                />
              </div>
              <div>
                <label htmlFor="name" className="">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your favorite milk tea..."
                  rows="4"
                  className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-white-500 border border-gray-400 mb-4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white hover:bg-gray-200 py-2 px-6 rounded font-medium transition duration-300 border border-gray-400 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
