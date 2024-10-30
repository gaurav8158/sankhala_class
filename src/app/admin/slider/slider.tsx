"use client";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import axios from "axios";
import toast, { Toast } from "react-hot-toast";
import Image from "next/image";

interface RootState {
  auth: {
    accessToken: string;
  };
}

const AdminSlides: React.FC = () => {
  const [sliderData, setSliderData] = useState<string[]>([]);
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [filename, setFilename] = useState<string>("");
  const [scannerPreview, setScannerPreview] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/slider/allslider`
      );
      console.log(await response.data.slider.bannerContent);
      setSliderData(response.data.slider.bannerContent);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };

  const handleDelete = async (slideName: string) => {
    try {
      const fileData = {
        fileName: slideName,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/slider/removeslidercontent`,
        fileData,
        {}
      );
      toast.success(response.data.message);
      getSlides();
    } catch (error: any) {
      console.error("Error deleting slide:", error);
      toast.error(`Failed to delete slide: ${error.message}`);
    }
  };

  const handleAdd = async () => {
    if (selectFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectFile);

        await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/slider/addslidercontent`,
          formData,
          {}
        );

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        toast.success("Image uploaded successfully");
        setSelectFile(null);
        setFilename("");
        setScannerPreview("");
        getSlides();
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image");
      }
    } else {
      toast.error("Select an image to upload");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScannerPreview(URL.createObjectURL(file));
      setSelectFile(file);
      setFilename(file.name);
    }
  };

  const handlePreview = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSelectFile(null);
    setFilename("");
    setScannerPreview("");
  };

  return (
    <div className="font-[Inter] shadow-lg w-full rounded-xl main-body-right min-h-[400px]  bg-[#ffff] ">
      <div className="w-full py-1 pb-10 px-4 ">
        <div className="px-0 w-full py-6 ">
          <div className="flex flex-wrap">
            {sliderData?.map((image, index) => (
              <div key={index} className="relative m-2">
                <div className="h-40 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                  <Image
                    width="300"
                    height="300"
                    alt="slide"
                    className="h-full w-full object-cover object-center"
                    src={`http://localhost:8003/images/${image}`}
                  />
                </div>
                <div className="absolute top-0 right-0 flex">
                  <button
                    onClick={() => handleDelete(image)}
                    className="bg-red-500 text-white rounded-full flex items-center justify-center -m-2"
                  >
                    <Icon
                      icon="entypo:cross"
                      className="text-white bg-red-500 rounded-lg"
                      width={24}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 flex gap-2">
            <div>
              <div className="flex gap-2">
                <input
                  className="border border-gray-900 shadow-md py-[5px] px-[5px] w-80 rounded-lg"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
                <button
                  onClick={handleAdd}
                  className="h-10 flex bg-[#0068B4] w-40 text-white  justify-center items-center gap-3 rounded-xl "
                >
                  <Icon icon="bytesize:upload" width={20} />
                  <span>Upload</span>
                </button>
              </div>
              {scannerPreview && (
                <div className="my-3">
                  <p className="text-gray-700 ml-2 text-sm font-bold mb-2">
                    Slide Preview:
                  </p>
                  <div className="relative w-96 m-2">
                    <div className="h-40 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90">
                    <Image
                    width="300"
                    height="300"
                        alt="preview"
                        className="h-full w-full object-cover object-center"
                        src={scannerPreview}
                      />
                    </div>
                    <div className="absolute top-0 right-0 flex">
                      <button
                        onClick={handlePreview}
                        className="bg-red-500 text-white rounded-full p-4 w-6 h-6 flex items-center justify-center -m-2"
                      >
                        <Icon icon="charm:cross" width={24} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSlides;
