import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Validate file type (PNG or JPG)
    const acceptedTypes = ["image/png", "image/jpeg"];
    if (!acceptedTypes.includes(file.type)) {
      alert("Please select a PNG or JPG image file.");
      return;
    }

    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file)); // Generate temporary URL for preview
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
    <div>
      <header className=" h-24">
        <img className="w-60 mt-6 mr-4" src="../public/images/logoBETA.png" />
        <hr
          className="mt-3 border-2
      mix-blend-overlay opacity-50"
        />
      </header>
      <div className="image-upload-container h-full flex items-center align-middle  ">
        <form onSubmit={SendRequestToChat} className="max-lg mx-auto">
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

          <div>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleFileChange}
              className="h-12
              bg-[#D9D9D9] rounded-lg 
              cursor-pointer
              file:h-12 
              file:mr-4 file:py-2 file:px-4
              file:border-0
              file:text-sm file:font-semibold
              file:bg-gradient-to-r from-yellow-500 to-orange-500
              hover:bg-gray-500 ease-in-out duration-500
              file:text-white
              hover:scale-110 ease-in-out duration-300
              "
            />
          </div>
          <div className="mt-3 flex justify-center ">
            <div className="ml-4 mr-4">
              <button
                type="reset"
                className="
              bg-gradient-to-tr from-[#8E150E] from-12% to-[#F23326]
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
                إعادة
              </button>
            </div>
            <div className="ml-4 mr-4">
              <button
                type="submit"
                className="
              bg-gradient-to-b from-[#CBB91B] from-50% to-[#CD970B]
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
                <Link to="/Page1">التالي</Link>
              </button>
            </div>
          </div>
          {/*           <div className='mt-3 flex justify-center'>

            <button type="submit" 
            className="text-white bg-gradient-button
             hover:bg-blue-800 
             focus:ring-4 
             focus:outline-none 
             focus:ring-blue-300 
             font-medium rounded-lg 
             text-sm w-full sm:w-auto 
             px-5 py-2.5 
             text-center 
             dark:bg-blue-600 
             dark:hover:bg-blue-700 
             dark:focus:ring-blue-800
             
             ">Submit</button>
          </div> */}
          {/* Testing diffrent button desgign */}

          {/*           <div className="mt-3 flex justify-center">
            <button
              type="submit"
              className="
            bg-gradient-to-r from-[#f6d365] to-[#fda085]
            hover:ease-in-out duration-500
            hover:bg-opacity-50
            hover:bg-gradient-to-tr from-orange-300 to-orange-600
            hover:text-white  
            hover:ring-zinc-300 
            hover:ring-2 
            hover:outline-none
            text-white
            font-medium rounded-3xl
            text-sm w-full sm:w-32
            px-3 py-2.5 
            text-center
            
            "
            >
              Submit
            </button>
          </div> */}
        </form>
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
      </div>
      {/*       <footer className=" h-28">
        <h2 className=" text-white">Footer placerholder text</h2>
      </footer> */}
    </div>
  );
}

export default home;
