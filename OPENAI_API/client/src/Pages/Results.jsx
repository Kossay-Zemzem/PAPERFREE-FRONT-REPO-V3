import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="w-80">
          <div
            className=" bg-gray-200 h-4 rounded-full"
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
        </div>
      </div>
    </div>
  );
}

export default Results;
