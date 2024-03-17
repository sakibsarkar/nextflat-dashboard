"use client";
import Image from "next/image";
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
    return (
        <div className="w-full min-h-[195px] bg-[#D9D9D9] pl-[7.3px] pr-[5.8px] pt-[7.19px] pb-[11px] flex justify-start items-start gap-[7px] rounded-[10px]">
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

                    <button onClick={() => setSelected(selected + 1)}>
                        <Image src={"/images/right.png"} alt="right" width={25.18} height={27} />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default DisplayCard;