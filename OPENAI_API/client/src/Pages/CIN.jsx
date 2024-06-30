import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

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
