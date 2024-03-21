"use client";
import ArrowDownIcon from "@/utils/icons/ArrowDownIcon";
import FilterIcon from "@/utils/icons/FilterIcon";
import SideArrowIcon from "@/utils/icons/SideArrowIcon";
import {useContext, useLayoutEffect} from "react";
import {StateContext} from "@/provider/ContextProvieder/ContextProvieder";
import {Navlinks} from "@/utils/mock/Links/Navlinks";

const Sidebar = () => {
    const {setShowBar, showBar} = useContext(StateContext);

    const boxShadow = {
        boxShadow: "0px 20px 25px -5px rgba(15, 23, 42, 0.10), 0px 10px 10px 0px rgba(15, 23, 42, 0.05)",
    };

    // side bar hiding style **----
    const hideStyle = {
        minWidth: "64px",
        transition: "0.3s",
        padding: "16px",
    };

    // ----- Run the effect only once ------
    useLayoutEffect(() => {
        const updateHeight = () => {
            // ----- ** to check the device width **-----
            const width = window.screen.width;

            // ** initialy hiding the sidebar for small devices **
            if (width && width <= 880) {
                setShowBar(false);
            }
        };

        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, [setShowBar]);

    return (
        <div
            className={`min-w-[288px] h-full p-[20px] flex flex-col items-center justify-between duration-[0.3s] ${
                showBar ? "absolute" : "absolute"
            } top-0 left-0 md:static z-20 bg-white`}
            style={showBar ? {} : hideStyle}
        >
            <div className=" flex justify-start items-start gap-[16px] relative w-full">
                <div
                    className="bg-[#2D68FE] center w-[32px] h-[32px] rounded-[4px] cursor-pointer"
                    onClick={() => setShowBar(true)}
                >
                    <FilterIcon />
                </div>
                {showBar ? <h1 className="text-[24px] font-[600] text-[#324054]">Filters</h1> : ""}

                {showBar ? (
                    <div
                        className="w-[48px] h-[48px] center bg-white rounded-full absolute right-0 cursor-pointer"
                        style={boxShadow}
                        onClick={() => setShowBar(false)}
                    >
                        <SideArrowIcon />
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div
                className={`flex flex-col items-center justify-start w-full ${
                    showBar ? "gap-[12px]" : "gap-[24px]"
                } duration-[0.3s]`}
            >
                {Navlinks.map(({Icon, id, text}) => (
                    <div
                        key={id}
                        className={`flex justify-between items-center w-full ${
                            showBar ? "p-[12px]" : ""
                        } hover:bg-[#EFF6FF] rounded-md`}
                    >
                        <div className={`flex justify-start items-center w-full cursor-pointer gap-[16px]`}>
                            <Icon />
                            {showBar ? <p>{text}</p> : ""}
                        </div>

                        {showBar ? <ArrowDownIcon /> : ""}
                    </div>
                ))}
            </div>

            {showBar ? "" : <div className="w-[32px] h-[32px]"></div>}
        </div>
    );
};

export default Sidebar;
