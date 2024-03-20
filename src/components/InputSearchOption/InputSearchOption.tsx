import ArrowDownIcon from "@/utils/icons/ArrowDownIcon";
import SearchIcon from "@/utils/icons/SearchIcon";
import React from "react";

const InputSearchOption: React.FC<{
  feildName?: string;
  placeholder?: string;
}> = ({ feildName, placeholder }) => {
  return (
    <div className="border flex items-center h-[55px] rounded-[4px]">
      <div className="px-2">
        <SearchIcon />{" "}
      </div>
      <input
        type="text"
        className="w-full focus:outline-none"
        placeholder={placeholder}
        name={feildName}
      />
      <button className="px-2">
        <ArrowDownIcon />
      </button>
    </div>
  );
};

export default InputSearchOption;
