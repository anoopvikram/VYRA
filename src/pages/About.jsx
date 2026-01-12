import React from "react";

export const About = () => {
  return (
    <div
      className="relative h-screen w-full pt-20 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/home_mask_2.jpeg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-md"></div>


      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-7xl px-8 gap-10">
        
        {/* Left image with mask */}
        <div
          className="md:w-[500px] md:h-[500px] w-[350px] h-[350px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/logo.png')",
            WebkitMaskImage: "url('/home_top_mask_2.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
          }}
        ></div>

        {/* Right content */}
        <div className="flex flex-col gap-6 max-w-xl text-gray-300">
          <h1 className="text-5xl font-black text-gray-200">Tripzy</h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            Tripzy is a modern streetwear brand built for people who don’t fit into boxes.
            We design clothes that feel effortless but speak loud.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Every piece is crafted to move with you — from late night drives to early
            morning coffee runs. No trends. No noise. Just clean design, premium fabric,
            and real attitude.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 rounded-full border-2 border-gray-500 text-gray-300 hover:bg-gray-700 transition">
              Our Story
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 transition">
              Shop Tripzy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
