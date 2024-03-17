"use client";
import FilterIcon from "@/utils/icons/FilterIcon";
import SideArrowIcon from "@/utils/icons/SideArrowIcon";
import { useContext } from "react";
import { StateContext } from "@/provider/ContextProvieder/ContextProvieder";
import { Navlinks } from "@/utils/mock/Links/Navlinks";

const Sidebar = () => {


    const { setShowBar, showBar } = useContext(StateContext)


    const boxShadow = {
        boxShadow: "0px 20px 25px -5px rgba(15, 23, 42, 0.10), 0px 10px 10px 0px rgba(15, 23, 42, 0.05)"
    }


    return (
        <div className="min-w-[288px] h-full p-[20px] bg-slate-200 flex flex-col items-center justify-between">
            <div className=" flex justify-center items-start gap-[16px] relative w-full">
                <div className="bg-[#2D68FE] center w-[32px] h-[32px] rounded-[4px]">
                    <FilterIcon />
                </div>
                <h1 className="text-[24px] font-[600] text-[#324054]">Filters</h1>


                <div className="w-[48px] h-[48px] center bg-white rounded-full absolute right-0 cursor-pointer" style={boxShadow}>
                    <SideArrowIcon />
                </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full gap-[12px]">
                {
                    Navlinks.map(({ Icon, id, text }) => <div
                        key={id}
                        className="flex justify-start items-center gap-[16px] w-full cursor-pointer p-[12px]"
                    >
                        <Icon />
                        <p>{text}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Sidebar;