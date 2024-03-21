"use client";
import MapBox from "../MapBox/MapBox";
import EditPenIcon from "@/utils/icons/EditPenIcon";
import InputSearchOption from "./../InputSearchOption/InputSearchOption";

const Localization = () => {
    return (
        <div className="pt-[50px] w-full h-full">
            <h4 className="text-[32px] font-medium leading-normal">Localization</h4>
            <div className="flex gap-[53px] pt-[62px] flex-col lg:flex-row">
                <div className="flex-1 ">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="grid grid-cols-1 xsm:grid-cols-2 gap-[10px] md:gap[20px] lg:gap-[57px]"
                    >
                        <InputSearchOption placeholder="Country*" />
                        <InputSearchOption placeholder="City*" />
                        <InputSearchOption placeholder="Region / State*" />
                        <InputSearchOption placeholder="Area*" />
                        <InputSearchOption placeholder="Street address*" />
                        <InputSearchOption placeholder="Country*" />
                    </form>

                    <div className="flex justify-between pt-[50px] flex-wrap gap-[15px]">
                        <div className="flex items-center gap-[12px] text-blue-400 w-[437px] flex-wrap">
                            <p className="capitalize text-[14px] xsm:text-[16px] whitespace-nowrap text-ellipsis leading-normal line-clamp-1 w-full">
                                5.354708943431563,-3.9874719330168893
                            </p>
                            <button className="flex gap-[10px] items-center text-[16px] border border-blue-400 px-[10px] py-[7px] sm:px-[20px] sm:py-[15px] rounded-[4px]">
                                <EditPenIcon /> Edit
                            </button>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <input type="checkbox" />
                            <p className="capitalize text-[16px] whitespace-nowrap text-ellipsis leading-normal text-gray-400">
                                Share the exact localization
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div
                        className={`w-full lg:w-[350] xl:w-[500px] 2xl:w-[868px] lg:h-full overflow-hidden flex-shrink-0 duration-[0.3s] h-[330px]`}
                    >
                        <MapBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Localization;
