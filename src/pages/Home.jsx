import React from "react";
import Carousel from "../components/Carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const navigate = useNavigate();


  useGSAP(() => {

 

  gsap.from(".title", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".title",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });

});
  return (
    <div
      className="relative h-screen w-full pt-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/home_bg.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-900/65 backdrop-blur-xs z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full overflow-hidden">


        {/* Left text */}
        <div className="lg:flex hidden flex-col gap-4">
          <p className="relative text-6xl font-black text-gray-400 left-5 top-10 capitalize">
            Style that feels like you. Elevated. effortless.
          </p>
          <button className="relative z-50 p-3 top-10 rounded-full m-2 text-gray-300 text-xl bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 transition">
            Shop Now
          </button>
        </div>

        {/* Center */}
        <div className="md:w-full md:h-full w-auto h-3/4 flex flex-col items-center justify-center">

          {/* VYRA masked text */}
          <div className="title md:w-[1000px] md:h-[1000px] w-[500px] h-[500px] flex items-center justify-center">
            <h1
              className="text-[7rem] md:text-[15rem] leading-none drop-shadow-2xl select-none text-transparent bg-clip-text"
              style={{
                fontFamily: "Abril Fatface",
                backgroundImage: "url('/skin.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "left",
              }}
            >
              VYRA
            </h1>
          </div>

          {/* Tagline + Carousel */}
          <div className="flex flex-col relative items-center justify-center">
            <div className="relative flex justify-between rounded-t-lg w-[460px] h-[200px] text-gray-300">
              <p className="relative text-gray-400  text-center md:ml-14 w-full md:text-3xl text-md -top-35 md:-top-25">
                Wear what speaks louder than words.
              </p>
            </div>

            <div className="absolute -top-44">
              <Carousel />
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden absolute w-4/5 flex flex-col">
              <p className="text-sm text-center font-normal text-gray-400">
                VYRA is not just a name stitched onto fabric, it is an attitude shaped by movement, ambition, and quiet confidence. Every piece is designed for people who live between moments, who understand that style is not about being loud but about being unmistakable.
              </p>
              <button
                onClick={() => navigate("/collections")}
                className="py-1 px-2 w-fit mx-auto top-5 mt-10 rounded-full m-2 text-gray-300 text-xl bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 transition"
              >
                Shop Now
              </button>

            </div>
          </div>
        </div>

        {/* Right cards */}
        <div className="lg:flex hidden relative right-15 top-10">
          <div className="flex flex-col gap-5 mt-4 w-full px-6">

            <div className="relative w-[200px] h-[200px] bg-gray-800 border-gray-300 border-2 rounded-xl">
              <p className="absolute rounded-full -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-2 text-white text-sm">
                New Arrivals
              </p>
              <img src="/tshirt-2.png" className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="relative w-[200px] h-[200px] bg-gray-800 border-gray-300 border-2 rounded-xl">
              <p className="absolute rounded-full -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-2 text-white text-sm">
                Best Sellers
              </p>
              <img src="/tshirt-1.png" className="w-full h-full object-cover rounded-xl" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
