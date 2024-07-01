import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { IdentificationIcon } from "@heroicons/react/24/solid";
function CIN() {
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
  /* function that detects when elements are on screen and returns true */
  function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }
  /* IsVisible1 is True if element appears on screen , so it goes from False to True and that's where the transition animation happens */
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1); /*for main body animation */
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2); /*for header only animation */
  const ref3 = useRef();
  const isVisible3 =
    useIsVisible(
      ref3
    ); /*for horizontal line animation (<hr> tag) because it fades in to 50% opacity only */

  return (
    <div className="flex flex-col h-[100vh]">
      <header ref={ref2} className={` h-24  `}>
        <div
          className={`flex justify-between transition ease-in-out duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
        >
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
          ref={ref3}
          className={`mt-3 border-2
        mix-blend-overlay
        transition ease-in-out duration-700 ${isVisible3 ? "opacity-50" : "opacity-0"}
        `}
        />
      </header>
      <div
        ref={ref1}
        className={`image-upload-container 
      h-full mb-20
      flex items-center justify-around 
      transition ease-in-out duration-300 ${isVisible1 ? "opacity-100" : "opacity-0"} ease-in-out duration-700 ${isVisible1 ? "translate-x-0" : "translate-y-4"} 
      `}
      >
        <form
          onSubmit={SendRequestToChat}
          className={`${imageUrl ? `mr-24` : ``}`}
        >
          <div
            className="flex justify-center items-center h-16 
            mb-10 gap-2
          bg-black bg-opacity-35 rounded-lg
          shadow-lg
        "
          >
            {/*             <IdentificationIcon
              className="inline-block w-6 h-6
             ml-3 mr-2
             bg-gradient-to-b from-[#FED33D] from-15% to-[#F67C0B]
            
            "
            /> */}
            <svg
              className="inline-block
              w-14
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
                fill-rule="evenodd"
                d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M10 5.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m.75 3.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM10 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 10 8m-2.378 3c.346 0 .583-.343.395-.633A2.998 2.998 0 0 0 5.5 9a2.998 2.998 0 0 0-2.517 1.367c-.188.29.05.633.395.633z"
                clip-rule="evenodd"
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
              بطاقة التعريف الوطنية
            </div>
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
          <div className="mb-5">
            <input
              placeholder="اللقب"
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
              block min-w-[260px] p-1.5
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
            <label className="text-sm text-white mr-3 overflow-hidden whitespace-nowrap text-overflow-ellipsis max-w-28">
              {selectedFile}
            </label>
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
                <Link to="/CertResid">التالي</Link>
              </button>
            </div>
          </div>
        </form>
        {imageUrl && (
          <div
            className={`
          flex
          h-[80vh] w-[100vh]
          overflow-hidden
          mt-6 ${imageUrl ? `ml-16` : ``}  `}
          >
            <img
              src={imageUrl}
              alt="Uploaded Image"
              className="
            max-w-full max-h-full
            object-contain
          
    "
            />
          </div>
        )}
      </div>
      {/*       <footer className=" h-28">
        <h2 className=" text-white">Footer placerholder text</h2>
      </footer> */}
    </div>
  );
}

export default CIN;
