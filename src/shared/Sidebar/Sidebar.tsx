"use client";
import ArrowDownIcon from "@/utils/icons/ArrowDownIcon";
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

    // sidebar hide style
    const hideStyle = {
        minWidth: "64px",
        transition: "0.3s",
        padding: "16px"
    }


    return (
        <div className="min-w-[288px] h-full p-[20px] flex flex-col items-center justify-between duration-[0.3s]"
            style={showBar ? {} : hideStyle}
        >
            <div className=" flex justify-start items-start gap-[16px] relative w-full">
                <div className="bg-[#2D68FE] center w-[32px] h-[32px] rounded-[4px]" onClick={() => setShowBar(true)}>
                    <FilterIcon />
                </div>
                {

                    showBar ? <h1 className="text-[24px] font-[600] text-[#324054]">Filters</h1> : ""
                }

                {
                    showBar ?
                        <div className="w-[48px] h-[48px] center bg-white rounded-full absolute right-0 cursor-pointer" style={boxShadow} onClick={() => setShowBar(false)}>
                            <SideArrowIcon />
                        </div>
                        :
                        ""
                }
            </div>

            <div className={`flex flex-col items-center justify-start w-full ${showBar ? "gap-[12px]" : "gap-[24px]"} duration-[0.3s]`}>
                {
                    Navlinks.map(({ Icon, id, text }) => <div key={id}
                        className="flex justify-between items-center w-full hover:bg-[#EFF6FF] rounded-[4px]"
                    >
                        <div
                            className={`flex justify-start items-center w-full cursor-pointer ${showBar ? "p-[12px] gap-[16px]" : ""}`}
                        >
                            <Icon />
                            {
                                showBar ? <p>{text}</p> : ""
                            }

                        </div>
                        <ArrowDownIcon />
                    </div>)
                }
            </div>

            {
                showBar ? "" : <div className="w-[32px] h-[32px]"></div>
            }

        </div>
    );
};

export default Sidebar;