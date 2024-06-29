import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

function Pass() {
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
        <form onSubmit={SendRequestToChat} className="max-lg mx-auto">
          <div className="mb-5">
            <input
              placeholder="كذا وكذا"
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
              placeholder="رقم تسجيل"
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
                <Link to="/Results">التالي</Link>
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
export default Pass;
