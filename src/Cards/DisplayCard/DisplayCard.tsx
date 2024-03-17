"use client";
import ArrowLeft from "@/utils/icons/ArrowLeft";
import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/utils/icons/LinkIcon";
import React, { useState } from "react";

type DataType = {
    name: string;
    subName: string;
    rooms: string[];
    price: string;
    images: string[];
    links: { href: string }[];
}


interface propsType {
    data: DataType
}

const DisplayCard: React.FC<propsType> = ({ data }) => {
    const [selected, setSelected] = useState<number>(0)

    // next image slide
    const nextImg = () => {

        // --- index of the last image
        const lastImg = data.images.length - 1;

        // check islast image
        if (selected === lastImg) {
            return setSelected(0)
        }

        setSelected(selected + 1)

    }


    return (
        <div className="w-full min-h-[195px] bg-[#D9D9D9] pl-[7.3px] pr-[5.8px] pt-[7.19px] flex justify-start items-start gap-[16px] rounded-[10px]">

            {/* images */}
            <div className="w-[252.87px] h-[176.81px] rounded-[5px] overflow-hidden relative">

                {
                    data.images.map((img, i) => <div key={"img" + i} className={`w-full h-full absolute top-0 left-0 ${i === selected ? "opacity-1" : "opacity-0"} duration-[0.4s]`}>
                        <Image width={252} height={176} src={img} alt="img" className={`absolute top-0 left-0 imgFit `} />
                    </div>)
                }

                <div className="absolute w-full h-full flex justify-between items-center">
                    <button onClick={() => setSelected(selected - 1)}>
                        <Image src={"/images/left.png"} alt="right" width={25.18} height={27} />
                    </button>

                    <button onClick={nextImg}>
                        <Image src={"/images/right.png"} alt="right" width={25.18} height={27} />
                    </button>

                </div>
            </div>

            {/* details */}
            <div className="flex flex-col items-start justify-start gap-[2.66px] pt-[2.87px]">

                <div className="flex flex-col gap-[5.91px]">
                    <div className="flex flex-col gap-[0px]">
                        <h1 className="text-[24px] font-[500]">{data.name}</h1>
                        <p className="text-[16px] font-[300] italic">{data.subName}</p>
                    </div>


                    <div className="flex flex-col gap-[5.91px]">
                        {
                            data.rooms.map((room, i) => <p key={i + "r"} className="text-[14px] font-[500]">{room}</p>)
                        }
                    </div>
                </div>

                <div className="flex justify-start items-center gap-[7.36px]">
                    {
                        data.links.map((link, i) => <Link href={link.href} key={i + "link"} className="flex gap-[5.04px] items-center font-[300] text-[12px]">
                            <LinkIcon />  Link {i + 1}

                        </Link>)
                    }

                    <button className="w-[93px] h-[40px] px-[14px] flex items-center gap-[10px] bg-white rounded-[6px]">
                        <ArrowLeft />  Apply
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DisplayCard;