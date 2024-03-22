import React from "react";

const WhatIsInclude: React.FC<{ serviceArr: string[] }> = ({ serviceArr }) => {
  return (
    <div className="max-w-[485px] mt-[9px]">
      <h4 className="text-[#868686]">What is Include:</h4>
      <div>
        <div className="grid grid-cols-2 justify-between items-center">
          {serviceArr.map((service, i) => (
            <div key={i + "ss"}>
              <input type="checkbox" name="" id="" />{" "}
              <span className="text-sm text-violet-400">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsInclude;
