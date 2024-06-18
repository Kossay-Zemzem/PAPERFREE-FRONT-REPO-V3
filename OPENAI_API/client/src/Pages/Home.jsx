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
      <div>
        <Link to="CIN">NEXT</Link>
      </div>
      <div className="h-full flex items-center align-middle">
        <div
          className="bg-black 
        text-white"
        >
          BOX1
        </div>
        <div
          className="bg-black 
        text-white"
        >
          BOX2
        </div>
      </div>
    </div>
  );
}
export default Home;
