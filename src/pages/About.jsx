import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  

const container = useRef();

useGSAP(() => {

  gsap.from(".vyra-content", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".vyra-content",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".vyra-mask", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".vyra-mask",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });

}, { scope: container });




  return (
    <section 
      id="about"
      ref={container}
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/home_mask_2.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-7xl px-8 gap-10">

        {/* VYRA masked text */}
        <div className="md:w-[1000px] md:h-[1000px] w-[500px] h-[200px] flex items-center justify-center">
          <h1
            className="vyra-mask text-[8rem] md:text-[12rem] leading-none select-none text-transparent bg-clip-text"
            style={{
              fontFamily: "Abril Fatface",
              backgroundImage: "url('/skin.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            VYRA
          </h1>
        </div>

        {/* Right content */}
        <div className="vyra-content flex flex-col gap-6 max-w-xl text-gray-300">
          <h1 className="hidden sm:flex text-5xl font-black text-gray-200">VYRA</h1>

          <p className="text-xl text-center sm:text-left text-gray-400 leading-relaxed">
            VYRA is a modern streetwear brand built for people who don’t fit into boxes.
            We design clothes that feel effortless but speak loud.
          </p>

          <p className="text-gray-400 text-center sm:text-left leading-relaxed">
            Every piece is crafted to move with you — from late night drives to early
            morning coffee runs. No trends. No noise. Just clean design, premium fabric,
            and real attitude.
          </p>

          <div className="flex gap-4 mt-4 justify-center sm:justify-normal">
            <button className="px-6 py-2 rounded-full border-2 border-gray-500 text-gray-300 hover:bg-gray-700 transition">
              Our Story
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 transition">
              Shop VYRA
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
