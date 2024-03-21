import BigPlusIcon from "@/utils/icons/BigPlusIcon";
import React from "react";

const TwoGrid = () => {
    return (
        <div className="grid grid-cols-3 gap-2 auto-rows-[93px]">
            <div className="bg-gray-100 col-span-3 row-span-2 xsm:col-span-2 xsm:row-span-3  center-vnh">
                <div className="h-8 w-8">
                    <BigPlusIcon />
                </div>
            </div>
            <div className="bg-gray-100 ">
                <div className="h-8 w-8 center">
                    <BigPlusIcon />
                </div>
            </div>
            <div className="bg-gray-100 ">
                <div className="h-8 w-8 center">
                    <BigPlusIcon />
                </div>
            </div>
            <div className="bg-gray-100 ">
                <div className="h-8 w-8 center">
                    <BigPlusIcon />
                </div>
            </div>
        </div>
    );
};

export default TwoGrid;
