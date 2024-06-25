import React, { useState } from "react";
import { Link } from "react-router-dom";

function DocumentResult() {
  const [progress, setProgress] = useState(15);

  // Set the initial progress value
  return (
    <div className="flex flex-col items-center w-80">
      <div className="h-44 w-full mb-3 border-2 border-gray-100 text-white text-center">
        X animation placeholder
      </div>
      <div
        className=" bg-gray-200 h-4 rounded-full w-full"
        style={{ direction: "ltr" }}
      >
        <div
          className="bg-blue-500 h-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div
        className="text-white text-center mt-1
    "
      >
        تواقف بنسبة {progress} %
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
    </div>
  );
}
export default DocumentResult;
