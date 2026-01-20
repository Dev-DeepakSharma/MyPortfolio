import React from "react";
import { assets } from "../../assets/assets.js";

const GoogleGravity = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.plant})` }}
    >
      {/* Glass Card */}
      <div className="relative w-[350px] h-[450px] rounded-[35px] border border-white/ 
                      bg-white/1 backdrop-blur shadow-xl flex flex-col items-center pt-20">
        
        {/* Plant Image */}
        <img
          src={assets.plant}
          alt="plant"
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 z-20"
        />

        {/* Text Content */}
        <div className="text-center text-white mt-24 z-20">
          <p className="text-gray-300 text-sm">Indoor Plant</p>
          <h2 className="text-3xl font-semibold mb-4">Aglaonema plant</h2>

          <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleGravity;
