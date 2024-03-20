"use client";
import Image from "next/image";
import InputFeild from "../InputFeild/InputFeild";
import { useState } from "react";

const BasicInfo = () => {
  const [saleMode, setSaleMode] = useState("Rent");
  const gradient = {
    background: "linear-gradient(128deg, #FF5A00 28.11%, #F00 164.76%)",
  };
  return (
    <div className="w-full flex justify-between items-start gap-[30px] mt-[35px]">
      {/* left side */}
      <div className="flex w-full flex-col items-start justify-start">
        <div className="flex justify-between items-start w-full">
          <h1 className="text-[32px] font-[500]">Basics information</h1>
          <div className="relative w-[193px] h-[63px]">
            <InputFeild text="Property Owner name" />
          </div>
        </div>

        <div className="mt-[32px] flex items-center justify-between w-full">
          <div className="w-[154px] h-[61px] flex items-center justify-between rounded-full bg-[#3D3D3D] px-[20px] relative">
            <button
              className="text-[14px] font-[700] text-white"
              onClick={() => setSaleMode("Sale")}
            >
              Sale
            </button>
            <button
              className="text-[14px] font-[700] text-white"
              onClick={() => setSaleMode("Rent")}
            >
              Rent
            </button>

            <div
              style={gradient}
              className={`h-full w-[80px] absolute p-[19px] rounded-[51px] ${
                saleMode === "Rent" ? "right-0" : "left-0"
              }`}
            >
              <p className={`text-[14px] font-[700] text-white  `}>
                {saleMode}
              </p>
            </div>
          </div>
          <div className="w-[199px] h-[63px] relative">
            <InputFeild text="You are*" placeholder="Real estate Agency" />
          </div>
          <div className="w-[193px] h-[63px] relative">
            <InputFeild text="You are*" />
          </div>
          <div className="w-[193px] h-[63px] relative">
            <InputFeild text="You are*" />
          </div>
        </div>

        <div className="flex justify-start items-center mt-[37px] gap-[33px]">
          <div className="relative w-[193px] h-[63px]">
            <InputFeild text="Property Type" placeholder="Flat" />
          </div>
          <div className="relative w-[193px] h-[63px]">
            <InputFeild
              text="Property creation date*"
              placeholder="Flat"
              type="date"
            />
          </div>
        </div>

        <div className="mt-[63px] flex items-center justify-start gap-[33px]">
          <div className="relative w-[157px] h-[63px]">
            <InputFeild
              text="Number of room*"
              type="number"
              placeholder="Room"
            />
          </div>

          <div className="relative w-[256px] h-[63px] flex justify-between  items-center border-[1px] border-[#868686] rounded-[8px]  p-[15px]">
            <input
              type="text"
              placeholder="200$/"
              className="w-full h-full outline-none"
            />
            <select>
              <option value="">Month</option>
            </select>
            <p className="absolute px-[5px] text-[14px] font-[300] bg-white text-[#868686] left-[15px] top-[-15px]">
              Price
            </p>
          </div>

          <div className="relative w-[256px] h-[63px] flex justify-between  items-center border-[1px] border-[#868686] rounded-[8px]  p-[15px]">
            <input
              type="text"
              placeholder="200$/"
              className="w-full h-full outline-none"
            />
            <p className="text-[#31C65B] w-fit">12.5 $/m2</p>
            <p className="absolute px-[5px] text-[14px] font-[300] bg-white text-[#868686] left-[15px] top-[-15px]">
              Surface (m2)*
            </p>
          </div>
        </div>

        <div className="mt-[30px] gap-[106px] flex items-center justify-between">
          <div className="w-[157px] h-[63px] relative">
            <InputFeild text="Bedroom*" placeholder="2" />
          </div>
          <button className="max-w-[368px] bg-[#5956E9] text-white rounded-[8px] p-[14px] flex justify-between">
            Add a Bedroom to rent separately +
          </button>
        </div>
      </div>

      {/* grid images */}
      <div className="grid grid-rows-3 grid-cols-3 gap-4 min-w-[868px]">
        <div className="row-span-2 col-span-2 custom-grid-box w-fit">
          <Image width={578} height={314} src="/images/house.png" alt="" />
        </div>
        <div className="row-span-1 col-span-1 custom-grid-box">
          <Image width={290} height={150} src="/images/house1.png" alt="" />
        </div>
        <div className="row-span-1 col-span-1 gridBox"></div>
        <div className="row-span-1 col-span-1 gridBox"></div>
        <div className="row-span-1 col-span-1 gridBox"></div>
        <div className="row-span-1 col-span-1 gridBox"></div>
      </div>
    </div>
  );
};

export default BasicInfo;
