"use client";
import Image from "next/image";
import React, {useState} from "react";

type DataType = {
    imgData: string[];
    width?: number;
    height?: number;
};

const ImageSlider: React.FC<DataType> = ({imgData, width, height}) => {
    const Width = width || 252;
    const Height = height || 176;

    const [selected, setSelected] = useState<number>(0);

    // --- total number of image ---
    const totalImg = imgData.length;

    // ------ next image slide ------
    const nextImg = () => {
        // --- **** index of the last image
        const lastImg = imgData.length - 1;

        // check islast image
        if (selected === lastImg) {
            // return the fist image
            return setSelected(0);
        }

        // display next image
        setSelected(selected + 1);
    };

    // prev image slide
    const prevImg = () => {
        // --- **** index of the last image
        const lastImg = imgData.length - 1;

        // check isfirst image
        if (selected === 0) {
            // return the last image
            return setSelected(lastImg);
        }

        // display last image
        setSelected(selected - 1);
    };

    return (
        <div className="w-full h-full relative">
            {/* images  */}
            {imgData.map((img, i) => (
                <div
                    key={"img" + i}
                    className={`w-full h-full absolute left-0 ${
                        i === selected ? "top-[0] opacity-1" : "top-[100%] opacity-0"
                    } duration-[0.4s]`}
                >
                    <Image
                        width={Width}
                        height={Height}
                        src={img}
                        alt="img"
                        className={`absolute top-0 left-0 imgFit`}
                    />
                </div>
            ))}
            <div className="absolute w-full h-full flex  justify-between items-center">
                <button onClick={prevImg}>
                    <Image src={"/images/left.png"} alt="right" width={25.18} height={27} />
                </button>

                <button onClick={nextImg}>
                    <Image src={"/images/right.png"} alt="right" width={25.18} height={27} />
                </button>

                <div className="absolute w-full bottom-[12.47px] flex justify-center items-center gap-[10px]">
                    {Array.from({length: totalImg})
                    .fill("")
                    .map((_, i) => (
                        <div
                            key={i + "dot"}
                            className={`w-[10px] h-[10px] ${
                                i === selected ? "bg-[#0080FF]" : "bg-[#BBBBBF]"
                            } rounded-full cursor-pointer`}
                            onClick={() => setSelected(i)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
