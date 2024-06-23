import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  /* h-[calc(100vh-103px)] */
  return (
    <div>
      <header className="flex justify-center">
        <img
          className="w-96 mt-6 mr-4 mb-6"
          src="../public/images/logoBETA.png"
        />
      </header>

      <div
        className="flex 
      items-center
      justify-center
      h-[calc(100vh-131px)]
      "
      >
        <div className="flex gap-x-20 mb-24">
          <div
            className="bg-black bg-opacity-35 rounded-lg
         pr-8 pl-8 pt-3 pb-3
        "
          >
            <div
              className=" 
            font-lalezar
            text-center
            bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
            text-transparent
            bg-clip-text
            text-2xl
            mb-5 mt-1
          
          "
            >
              إنشاء حساب جديد
            </div>
            <div className="mb-5">
              <input
                placeholder="البريد الإلكتروني"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block p-1.5
             text-black text-xl text-center
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             hover:scale-110 ease-in-out duration-300
             "
                required
              />
            </div>
            <div className="mb-5">
              <input
                placeholder="ادخل كلمة السر"
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
            <div className="mb-5">
              <input
                placeholder="ادخل كلمة السر مجداد"
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="
                bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
                rounded-lg
                text-black text-lg 
                font-medium 
                w-full sm:w-20
                px-3 py-2 
                text-center
                hover:ease-in-out duration-500
                hover:bg-opacity-50
                
                hover:text-white  
                hover:ring-zinc-300 
                hover:ring-2 
                hover:outline-none
  
                "
              >
                <Link to="CIN">إنشاء</Link>
              </button>
            </div>
          </div>
          <div
            className="bg-[#C3BDBD] w-1 h-64 mix-blend-soft-light opacity-65
        
        "
          ></div>
          <div
            className="
          bg-black bg-opacity-35 rounded-lg
        ml-4 mr-4 pr-8 pl-8 pt-3 pb-3 h-64
        "
          >
            <div
              className="
            font-lalezar
            text-center
            bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
            text-transparent
            bg-clip-text
            text-2xl
            mb-5 mt-1
          
          "
            >
              تسجيل الدخول
            </div>
            <div className="mb-5">
              <input
                placeholder="البريد الإلكتروني"
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
            <div className="mb-5">
              <input
                placeholder="ادخل كلمة السر"
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
            <div className="flex justify-center">
              <button
                type="submit"
                className="
                bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
                rounded-lg
                text-black text-lg 
                font-medium 
                w-full sm:w-20
                px-3 py-2 
                text-center
                hover:ease-in-out duration-500
                hover:bg-opacity-50
                
                hover:text-white  
                hover:ring-zinc-300 
                hover:ring-2 
                hover:outline-none
  
                "
              >
                <Link to="CIN">دخول</Link>
              </button>
            </div>
            <div
              className=" 
            text-center
            bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
            text-transparent
            bg-clip-text
            text-lg
            font-medium
            mb-5 mt-8
            hover:scale-95 ease-linear duration-300
          "
            >
              <Link to="">لا يمكنك الولوج لحسابك ؟ </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
