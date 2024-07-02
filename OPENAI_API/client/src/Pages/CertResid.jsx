import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

function CertResid() {
  const [selectedFile, setSelectedFile] = useState("لم يتم إختيار ملف  "); //Default filename placeholder before uploading a file
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      try {
        const acceptedTypes = ["image/png", "image/jpeg"];
        if (!acceptedTypes.includes(file.type)) {
          alert("Please select a PNG or JPG image file.");
          return;
        }
        setSelectedFile(file.name); // Assuming you want to display the file name
        setImageUrl(URL.createObjectURL(file)); // Generate temporary URL for preview
      } catch (error) {
        console.error("Error processing the file", error);
      }
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PNG or JPG image file first.");
      return;
    }

    // Implement file upload logic here (consider using libraries like Axios)
    const formData = new FormData();
    formData.append("file", selectedFile);

    // Replace with your actual server-side endpoint for image upload
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("Image uploaded successfully!");
      // Update state with the actual image URL from the server response
      setImageUrl(data.imageUrl); // Assuming the server returns the uploaded image URL
      setSelectedFile(null); // Clear selection after successful upload
    } else {
      console.error("Error uploading image:", data.error);
      alert("Error uploading image. Please try again.");
    }
  };

  const SendRequestToChat = (e) => {
    try {
      e.preventDefault();
      const response = axios.post("localhost:8080/askchatgpt", {
        nom: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        id: document.getElementById("id").value,
        image: document.getElementById("image").value,
      });
      console.log(response.data);
    } catch (error) {
      console.log("Error making the Chat GPT request" + error);
    }
  };
  return (
    <div className="flex flex-col h-[100vh]">
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
      <div
        className="image-upload-container 
      h-full flex items-center justify-center mb-20
      "
      >
        <form onSubmit={SendRequestToChat} className="">
          <div
            className="flex justify-center items-center h-16 
            mb-10 gap-2 min-w-[260px]
          bg-black bg-opacity-35 rounded-lg
          shadow-lg
        "
          >
            <svg
              className="inline-block
              w-12
             "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <defs>
                <linearGradient
                  id="iconGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(254, 209, 54)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(246, 124, 11)", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#iconGradient)"
                fillRule="evenodd"
                d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75m0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                clipRule="evenodd"
              />
            </svg>
            <div
              className=" 
            font-lalezar
            text-center
            bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
            text-transparent
            bg-clip-text
            text-2xl
            
          "
            >
              شهادة الإقامة
            </div>
          </div>
          <div className="mb-5">
            <input
              placeholder="عنوان"
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
              placeholder="رقد البريد"
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
              placeholder="رقم بطاقة التعريف الوطنية"
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
          <div
            className="flex flex-row items-center mb-5
                    hover:scale-110 ease-in-out duration-300"
          >
            <input
              type="file"
              accept="image/png,image/jpeg"
              id="custom-input"
              onChange={handleFileChange}
              hidden
            />
            <ArrowUpTrayIcon
              className="absolute mr-1.5 w-7 pointer-events-none
            text-red-600"
            />
            <label
              htmlFor="custom-input"
              className="block cursor-pointer
               py-1.5 pr-10 pl-3 
              border border-red-600 rounded-lg
              text-lg
              font-semibold
              text-gray-400
              font-semibold bg-[#D9D9D9] 
         
            "
            >
              إختر ملف
            </label>
            <label className="text-sm text-white mr-3">{selectedFile}</label>
          </div>
          <div className="mt-3 flex justify-center ">
            {/* in case you need to add another button or text add it under this div */}
            <div className="ml-4 mr-4">
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
                <Link to="/Pass">التالي</Link>
              </button>
            </div>
          </div>
        </form>
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
      </div>
      {/*       <footer className=" h-28">
          <h2 className=" text-white">Footer placerholder text</h2>
        </footer> */}
    </div>
  );
}
export default CertResid;
