import React from "react";
import HrTitle from "../HrTitle/HrTitle";
import FilterBox from "../FilterBox/FilterBox";

const WhatAreWeLooking = () => {
    const optionArr1 = ["Self-employed", "Unemployed", "Student", "Employed"];

    return (
        <section className="w-full">
            <HrTitle text="Who are you looking for" />
            <div className="w-full flex items-center justify-start xl:gap-[466px] lg:gap-[50px] gap-[20px]">
                <div className="flex items-center justify-start gap-[66px]">
                    <FilterBox optionArr={optionArr1} placeholder="Working Status" />
                    <FilterBox optionArr={optionArr1} placeholder="Working Status" />
                </div>

                <div className="w-[325px] h-[325px] center border-[1px] border-[#e4e4e499] rounded-sm flex-col gap-[9px]">
                    <h2 className="text-[28px] text-[#131313] italic">Drop files here</h2>
                    <p>or</p>
                    <button className="w-[150px] bg-[#6979F8] py-[14px] text-white rounded-md">Browse</button>
                </div>
            </div>
        </section>
    );
};

export default WhatAreWeLooking;
