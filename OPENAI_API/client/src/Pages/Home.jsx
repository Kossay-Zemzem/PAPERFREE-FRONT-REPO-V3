import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";

function Home() {
  /* h-[calc(100vh-131px)] */
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
        <div className="flex gap-x-20 mb-20">
          <div
            className="bg-black bg-opacity-35 rounded-lg
         pr-8 pl-8 pt-3 pb-3 w-[345px] 
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
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <XCircleIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="الإسم"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full 
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

             "
                required
              />
            </div>
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <XCircleIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="اللقب"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

             "
                required
              />
            </div>
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <EnvelopeIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="البريد الإلكتروني"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

             "
                required
              />
            </div>
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <LockClosedIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="أدخل كلمة العبور"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

             "
                required
              />
            </div>
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <LockClosedIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="أدخل كلمة العبور مجداد"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

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
            className="bg-[#C3BDBD] w-1 h-72 mix-blend-soft-light opacity-65
        
        "
          ></div>
          <div
            className="
          bg-black bg-opacity-35 rounded-lg
        ml-4 mr-4 pr-8 pl-8 pt-3 pb-3 h-64 w-72 
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
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <EnvelopeIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="البريد الإلكتروني"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

             "
                required
              />
            </div>
            <div
              className="
              relative mb-5 text-gray-400 focus-within:text-orange-400 ease-in-out duration-300
                         hover:scale-110 ease-in-out duration-300"
            >
              <LockClosedIcon className="w-7 h-7 mt-1.5 mr-2 absolute pointer-events-none " />
              <input
                placeholder="أدخل كلمة العبور"
                type="text"
                id="prenom"
                className="bg-[#D9D9D9]
              border border-red-600 rounded-lg
              block pt-1.5 pb-1.5 pr-3 w-full
             text-black text-xl
             placeholder-gray-400 placeholder:text-center 
             focus:ring-2             
             focus:ring-[#057933]
             text-center

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
