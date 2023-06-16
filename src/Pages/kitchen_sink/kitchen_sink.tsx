import React from "react";
import { Navbar } from "../../components";

const kitchen_sink = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center bg-gray-400 w-screen h-screen">
        {/* logo */}
        <p
          className="
            text-white
            cursor-pointer
            text-2xl
            -tracking-wider 
            leading-7 
            font-noto 
            font-bold
            hover:text-red-700 
            transition-colors
            duration-200
            delay-100
            "
        >
          Stellar
        </p>
      </div>
    </>
  );
};

export default kitchen_sink;
