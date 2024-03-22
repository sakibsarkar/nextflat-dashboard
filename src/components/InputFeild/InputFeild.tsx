import React from "react";

const InputFeild: React.FC<{
  text: string;
  placeholder?: string;
  feildName?: string;
  type?: string;
}> = ({ text, type, feildName, placeholder }) => {
  return (
    <div className="w-full h-full border-[1px] border-[#868686] rounded-[8px] overflow-hidden">
      <input
        type={type || "text"}
        className=" w-full h-full outline-none pl-[20px] py-[18px]"
        placeholder={placeholder || ""}
        name={feildName || ""}
      />
      <p className="absolute px-[5px] text-[14px] font-[300] bg-white text-[#868686] left-[15px] top-[-15px]">
        {text}
      </p>
    </div>
  );
};

export default InputFeild;
