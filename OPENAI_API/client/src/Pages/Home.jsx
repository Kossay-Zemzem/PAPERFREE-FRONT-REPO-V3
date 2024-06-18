import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header className=" h-24">
        <img className="w-60 mt-6 mr-4" src="../public/images/logoBETA.png" />
        <hr
          className="mt-3 border-2
        mix-blend-overlay opacity-50"
        />
      </header>

      <div className="h-full flex align-middle justify-center ">
        <div
          className="bg-black bg-opacity-35 rounded-lg
        ml-4 mr-4 pr-8 pl-8 pt-3 pb-3
        "
        >
          <div
            className="text-center text-white
            mb-5
          
          "
          >
            إنشاء حساب جديد
          </div>
          <div className="mb-5">
            <input
              placeholder="الأسم"
              type="text"
              id="prenom"
              className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block w-full p-1.5
             text-black text-xl text-center
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             hover:scale-110 ease-in-out duration-300
             "
              required
            />
          </div>
        </div>
        <div
          className="bg-black bg-opacity-35
        ml-4 mr-4 pr-8 pl-8 pt-3 pb-3
        "
        >
          <div className="mb-5">
            <input
              placeholder="الأسم"
              type="text"
              id="prenom"
              className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block w-full p-1.5
             text-black text-xl text-center
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             hover:scale-110 ease-in-out duration-300
             "
              required
            />
          </div>
        </div>
      </div>
      <div>
        <Link to="CIN">NEXT</Link>
      </div>
    </div>
  );
}
export default Home;
