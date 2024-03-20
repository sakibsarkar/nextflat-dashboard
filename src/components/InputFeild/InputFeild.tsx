import React from "react";

const InputFeild: React.FC<{ text: string; placeholder?: string }> = ({
  text,
  placeholder,
}) => {
  return (
    <div className="w-full h-full border-[1px] border-[#868686] pl-[20px] py-[18px] rounded-[4px]">
      <input
        type="text"
        className=" w-full h-full outline-none"
        placeholder={placeholder}
      />
      <p className="absolute px-[5px] bg-white text-[#868686] left-[15px] top-[-15px]">
        {text}
      </p>
    </div>
  );
};

export default InputFeild;
