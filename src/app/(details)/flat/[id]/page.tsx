"use client";
import ArrowLeft from "@/utils/icons/ArrowLeft";
import BoldFlagIcon from "@/utils/icons/BoldFlagIcon";
import CrossIcon from "@/utils/icons/CrossIcon";
import DisplayCard from "@/Cards/DisplayCard/DisplayCard";
import HeartIcon from "@/utils/icons/HeartIcon";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/shared/Navbar/Navbar";
import React from "react";
import ShareIcon from "@/utils/icons/ShareIcon";
import SideArrowIcon from "@/utils/icons/SideArrowIcon";
import SquareShareIcon from "@/utils/icons/SquareShareIcon";
import { displayData } from "@/utils/mock/Data/DisplayData";

interface PageProps {
    params: any;
}

const Page: React.FC<PageProps> = ({ params }) => {
    const flatId = params.id;
    const flat = displayData.find((data) => data.id === flatId)

    // return if there is no matched flat ------*****
    if (!flat) return;
    return (
        <div className="w-full h-full flex flex-col items-start justify-start">
            <div className="flex flex-col gap-[14.89px] w-full">
                {/* top section */}
                <div className="w-full flex flex-col justify-start items-start ">
                    <h1 className="text-[24px] font-[500]">Flat</h1>
                    <div className="w-full flex items-center justify-end gap-[29.29px]">
                        <div className="center gap-[5.64px]">
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><BoldFlagIcon /></div>
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><SquareShareIcon /></div>
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><ShareIcon /></div>
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><HeartIcon /></div>
                        </div>
                        <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><CrossIcon /></div>
                    </div>
                </div>


                <div className="w-full h-[297px] relative overflow-hidden ">
                    <ImageSlider imgData={flat.images} width={617} height={297} />
                </div>

            </div>

            <div className="flex justify-between items-center w-full mt-[27px]">
                <p className="text-[16px] italic font-[300]">{flat.subName}</p>
                <h2 className="text-[24px] font-[700]">{flat.price}</h2>
                <button className="w-[93px] center gap-[10px] bg-[#F0F2F6] rounded-[6px] pt-[9px] pb-[11px]">
                    Apply <ArrowLeft />
                </button>
            </div>

        </div>
    );
};

export default Page;