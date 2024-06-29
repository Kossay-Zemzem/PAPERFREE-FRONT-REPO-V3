import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

import IconResult from "./IconResult";

function Results() {
  const [progressCIN, setProgressCIN] = useState(15); // Set the initial progress value for CIN
  const [progressPass, setProgressPass] = useState(50); // Set the initial progress value for Passeport
  const [progressCert, setProgressCert] = useState(20); // Set the initial progress value for Certificat de residance

  function getProgressBarColor(progress) {
    //function that determines the color of the progress bar
    if (progress >= 0 && progress <= 30) {
      return "bg-red-500"; // Red color for 0 to 30%
    } else if (progress > 30 && progress <= 80) {
      return "bg-yellow-500"; // Yellow color for 31 to 80%
    } else if (progress > 80 && progress <= 100) {
      return "bg-green-500"; // Green color for 81 to 100%
    } else {
      return "bg-gray-500"; // Default color if progress is out of expected range
    }
  }

  return (
    <div>
      <header className=" h-24">
        <div className="flex justify-between">
          <Link>
            <img
              className="w-60 mt-6 mr-4"
              src="../public/images/logoBETA.png"
            />
          </Link>
          <Link to="/">
            <div
              className="text-white border
            p-1 ml-6 mt-5
            hover:bg-red-600 ease-in-out duration-500
            hover:scale-105
            "
            >
              خروج
              <ArrowLeftStartOnRectangleIcon className="inline-block w-6 h-6 text-white ml-3s mr-2" />
            </div>
          </Link>
        </div>
        <hr
          className="mt-3 border-2
        mix-blend-overlay opacity-50"
        />
      </header>
      <div className="flex justify-around">
        <div className="flex flex-col items-center w-80">
          <div className="h-44 w-full mb-3 border-2 border-gray-100 text-white text-center">
            CIN animation placeholder
          </div>
          <div
            className=" bg-gray-200 h-4 rounded-full w-full"
            style={{ direction: "ltr" }}
          >
            <div
              className={`${getProgressBarColor(progressCIN)} h-full rounded-full`}
              style={{ width: `${progressCIN}%` }}
            ></div>
          </div>
          <div
            className="text-white text-center mt-1
          "
          >
            تواقف بنسبة {progressCIN} %
          </div>
          <div className="relative flex items-center">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-black absolute ml-3s mr-2 pointer-events-none" />
            <button
              type="submit"
              className="
                bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
                rounded-lg
                text-black text-lg 
                text-center
                font-semibold
                pl-2 pr-9 py-2 mt-2 mb-2

                hover:ease-in-out duration-500
                hover:
                "
            >
              <Link to="/">التفاصيل</Link>
            </button>
          </div>
          {/* <CheckCircleIcon className="text-green-500 inline-block mr-2 w-10 h-10 " /> */}
          <IconResult progress={progressCIN} />
        </div>
      </div>
    </div>
  );
}

export default Results;
