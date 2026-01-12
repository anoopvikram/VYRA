import React from "react";
import Carousel from "../components/Carousel";

export const Home = () => {
  return (
    <div 
      className="relative h-screen w-full pt-20 flex flex-row overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/home_bg.jpg')" }}
    >
  <div className="absolute inset-0 bg-gray-900/65"></div>



      <div className="lg:flex hidden  flex-col gap-4">
        <p className='relative flex text-6xl font-black text-gray-400 left-5 top-10 capitalize'> Style that feels like you. Elevated. effortless.</p>
        <button 
          className="relative z-50 p-3 top-10 rounded-full m-2 text-gray-300 text-xl bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 transition-all cursor-pointer">
            Shop Now
        </button>
        </div>
      

        <div className="md:w-full md:h-full w-auto h-3/4 flex flex-col items-center  justify-center">
            <div
                className="md:w-[1000px] md:h-[1000px] w-[500px] h-[500px] bg-cover bg-center "
                style={{
                backgroundImage: "url('/home_mask_2.jpeg')",

                WebkitMaskImage: "url('/home_top_mask_2.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",


                }}
            ></div>
            <div className="flex flex-col relative items-center  justify-center">
              <div className="relative flex justify-between  rounded-t-lg w-[460px] h-[200px]  text-gray-300">
                <p className="relative text-gray-400 md:text-left text-center md:ml-14 w-full md:text-2xl text-xl -top-10 md:-top-18">Wear what speaks louder than words.</p>
              </div>
             <div className="absolute -top-44">
                <Carousel />
              </div>
              <div className="md:hidden flex flex-col">
                <p className=' relative text-xl text-center font-black h-fit flex items-end text-gray-400'>Timeless pieces for the moments that matter.</p>        
                <button 
                  className="relative z-50 py-1 px-2 w-fit mx-auto top-5 rounded-full m-2 text-gray-300 text-xl bg-gray-700 border-2 border-gray-600 hover:bg-gray-600 transition-all cursor-pointer">
                  Shop Now
                </button> 
              </div>
            </div>
            
        </div>
        <div className="lg:flex hidden relative right-15 top-10">
          <div className="flex flex-col gap-5 mt-4 w-full px-6">
          {/* Card 1 */}
          <div className="relative w-[200px] h-[200px] bg-gray-800  border-gray-300 border-2 rounded-xl ">
            <p className="absolute rounded-full -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-2 text-white text-sm">
              New Arrivals
            </p>
            <img 
              src="/tshirt-2.png" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>


          {/* Card 2 */}
          <div className="relative w-[200px] h-[200px] bg-gray-800  border-gray-300 border-2 rounded-xl ">
            <p className="absolute rounded-full -top-3 left-1/2 -translate-x-1/2 bg-gray-900 px-2 text-white text-sm">
              Best Sellers
            </p>
            <img 
              src="/tshirt-1.png" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>

        </div>

        </div>

    </div>
  );
};
