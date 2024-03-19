"use client";
import ArrowDownIcon from "@/utils/icons/ArrowDownIcon";
import DisplayCard from "@/Cards/DisplayCard/DisplayCard";
import MoneyIcon from "@/utils/icons/MoneyIcon";
import ShortByIcon from "@/utils/icons/ShortByIcon";
import ToggleButton from "@/utils/toggleButtons/ToggleButton";
import { useParams } from "next/navigation";
import { displayData } from "@/utils/mock/Data/DisplayData";

const Cards = () => {
    const { flatId } = useParams()
    const flat = displayData.find((item) => item.id == flatId)
    if (!flat) return;
    return (
        <div className="w-full h-full mx-auto">
            <div className="flex flex-col gap-[18px] w-full h-full">

                <div className="hidden justify-between items-center xsm:pl-[25px] xsm:flex">
                    <div className="flex justify-start items-center gap-[8px]">
                        <p className="text-[12px] sm:text-[14px] font-[500]">Sale</p>
                        <ToggleButton />
                        <p>Rent</p>
                    </div>

                    <div className="flex justify-between items-center gap-[16px] py-[12px] sm:p-[12px]">
                        <MoneyIcon />
                        <p className="text-[12px] sm:text-[16px] font-[500]">Price</p>
                        <ArrowDownIcon />
                    </div>

                    <div className="flex justify-between items-center gap-[16px] py-[12px] sm:p-[12px]">
                        <ShortByIcon />
                        <p className="text-[12px] sm:text-[16px] font-[500]">Sort By</p>
                        <ArrowDownIcon />
                    </div>

                </div>

                <div className="flex xsm:hidden justify-start items-center gap-[5px] py-[8px] px-[7px] border-[1px] border-[#6d6d6d] w-fit rounded-md mt-[20px] ml-[10px]">
                    <button className="text-[14px] font-[500]">View Filter Option</button>
                    <ArrowDownIcon />
                </div>


                <div className="w-full h-full pr-[8px] overflow-y-auto flex flex-col gap-[6px] smoothBar">
                    {
                        displayData.map((data, i) => <DisplayCard key={"t" + i} data={data} selected={flat.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;