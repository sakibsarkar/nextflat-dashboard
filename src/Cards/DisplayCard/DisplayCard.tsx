"use client";
import ArrowLeft from "@/utils/icons/ArrowLeft";
import EyeCloseIcon from "@/utils/icons/EyeCloseIcon";
import EyeIcon from "@/utils/icons/EyeIcon";
import HeartIcon from "@/utils/icons/HeartIcon";
import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@/utils/icons/LinkIcon";
import React, { useState } from "react";
import ShareIcon from "@/utils/icons/ShareIcon";

type DataType = {
    name: string;
    subName: string;
    views: number,
    year: number,
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

    // --- total number of image ---
    const totalImg = data.images.length

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

    // prev image slide 
    const prevImg = () => {

        // --- index of the last image
        const lastImg = data.images.length - 1;

        // check isfirst image
        if (selected === 0) {
            return setSelected(lastImg)
        }

        setSelected(selected - 1)
    }


    return (
        <div className="w-full lg:min-h-[195px] h-auto  bg-[#D9D9D9] pl-[7.3px] pr-[5.8px] pt-[7.19px] sm:pt-[0px] lg:pt-[7.19px] flex justify-start flex-col items-center lg:items-start gap-[16px] rounded-[10px] sm:flex-row">

            {/* image slider */}
            <div className="w-full sm:min-w-[252.87px] h-[176.81px] rounded-[5px] overflow-hidden relative">



                {/* images  */}
                {
                    data.images.map((img, i) => <div key={"img" + i} className={`w-full h-full absolute left-0 ${i === selected ? "top-[0] opacity-1" : "top-[100%] opacity-0"} duration-[0.6s]`}>
                        <Image width={252} height={176} src={img} alt="img" className={`absolute top-0 left-0 imgFit `} />
                    </div>)
                }


                {/* viwes*/}
                <div className="absolute top-[9.81px] left-[12.87px] w-[56px] h-[30px] pl-[5px] pr-[10px] center bg-[#00000080] text-white rounded-[5px]">

                    <EyeIcon />  <p className="text-[10px] font-[9000]">{data.views}</p>
                </div>

                {/* year */}
                <div className="absolute top-[9.81px] left-[87.87px] w-[44px] h-[30px] p-[5px] center bg-[#00000080] text-white rounded-[5px]">
                    <p className="text-[10px] font-[9000]">{data.year}</p>
                </div>


                <div className="absolute w-full h-full flex  justify-between items-center">
                    <button onClick={prevImg}>
                        <Image src={"/images/left.png"} alt="right" width={25.18} height={27} />
                    </button>

                    <button onClick={nextImg}>
                        <Image src={"/images/right.png"} alt="right" width={25.18} height={27} />
                    </button>

                    <div className="absolute w-full bottom-[12.47px] flex justify-center items-center gap-[10px]">
                        {
                            Array.from({ length: totalImg }).fill("").map((_, i) => <div
                                key={i + "dot"}
                                className={`w-[10px] h-[10px] ${i === selected ? "bg-[#0080FF]" : "bg-[#BBBBBF]"} rounded-full cursor-pointer`}
                                onClick={() => setSelected(i)}
                            ></div>)
                        }
                    </div>

                </div>


                {/* activity optiion  for small device */}
                <div className="flex sm:hidden justify-between items-center gap-[9.64px] absolute top-[8px] right-[5.8px]">
                    <div className="rounded-full center w-[32px] h-[32px] bg-[#E2E8F0]">
                        <ShareIcon />
                    </div>
                    <div className="rounded-full center w-[32px] h-[32px] bg-[#E2E8F0]">
                        <HeartIcon />
                    </div>
                    <div className="rounded-full center w-[32px] h-[32px] bg-[#E2E8F0]">
                        <EyeCloseIcon />
                    </div>
                </div>

            </div>

            {/* details */}
            <div className="w-full flex flex-col items-start justify-start gap-[2.66px] pt-[2.87px] relative lg:pb-[0px] pb-[10px]">

                {/* activity options*/}
                <div className="hidden sm:flex justify-between items-center gap-[9.64px] absolute top-[8px] right-[5.8px]">
                    <div className="rounded-full center w-[32px] h-[32px] bg-[#E2E8F0]">
                        <ShareIcon />
                    </div>
                    <div className="rounded-full center w-[32px] h-[32px] bg-[#E2E8F0]">
                        <HeartIcon />
                    </div>
                    <div className="rounded-full center w-[32px] h-[32px] bg-[#E2E8F0]">
                        <EyeCloseIcon />
                    </div>
                </div>



                <p className="absolute text-[24px] font-[700] top-[73px] right-[23px]">{data.price}</p>

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

                <div className="flex justify-end xsm:justify-between w-full items-center">
                    <div className="hidden xsm:flex justify-center items-center gap-[7.36px]">
                        {
                            data.links.map((link, i) => <Link href={link.href} key={i + "link"} className="flex gap-[5.04px] items-center font-[300] text-[12px]">
                                <LinkIcon />  Link {i + 1}

                            </Link>)
                        }
                    </div>

                    <button className="w-[93px] h-[40px] px-[14px] flex items-center gap-[10px] bg-white rounded-[6px]">
                        Apply  <ArrowLeft />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DisplayCard;