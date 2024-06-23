import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocumentResult from "../../components/DocumentResult";

function Results() {
  const [progressCIN, setProgressCIN] = useState(10); // Set the initial progress value for CIN
  const [progressPass, setProgressPass] = useState(50); // Set the initial progress value for Passeport
  const [progressCert, setProgressCert] = useState(20); // Set the initial progress value for Certificat de residance
  return (
    <div>
      <header className=" h-24">
        <img className="w-60 mt-6 mr-4" src="../public/images/logoBETA.png" />
        <hr
          className="mt-3 border-2
        mix-blend-overlay opacity-50"
        />
      </header>
      <div className="flex justify-around">
        {/*         <div className="flex flex-col items-center w-80">
          <div className="h-44 w-full mb-3 border-2 border-gray-100 text-white text-center">
            CIN animation placeholder
          </div>
          <div
            className=" bg-gray-200 h-4 rounded-full w-full"
            style={{ direction: "ltr" }}
          >
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: `${progressCIN}%` }}
            ></div>
          </div>
          <div
            className="text-white text-center mt-1
          "
          >
            تواقف بنسبة {progressCIN} %
          </div>
          <button
            type="submit"
            className="
                bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
                rounded-lg
                text-black text-lg 
                font-medium 
                sm:w-20
                px-3 py-2
                my-2 
                text-center
                hover:ease-in-out duration-500
                hover:bg-opacity-50
                
                hover:text-white  
                hover:ring-zinc-300 
                hover:ring-2 
                hover:outline-none
  
                "
          >
            <Link to="/">التفاصيل</Link>
          </button>
        </div> */}
        <DocumentResult />
        <DocumentResult />
        <DocumentResult />
      </div>
    </div>
  );
}

export default Results;
