"use client";
import MapBox from "../MapBox/MapBox";
import EditPenIcon from "@/utils/icons/EditPenIcon";
import InputSearchOption from './../InputSearchOption/InputSearchOption';

const Localization = () => {
  return (
    <div className="pt-[50px] w-full h-full">
      <h4 className="text-[32px] font-medium leading-normal">Localization</h4>
      <div className="flex gap-[53px] pt-[62px]">
        <div className="flex-1 ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-2 gap-[57px]"
          >
            <InputSearchOption placeholder="Country*" />
            <InputSearchOption placeholder="City*" />
            <InputSearchOption placeholder="Region / State*" />
            <InputSearchOption placeholder="Area*" />
            <InputSearchOption placeholder="Street address*" />
            <InputSearchOption placeholder="Country*" />
          </form>

          <div className="flex justify-between pt-[50px]">
            <div className="flex items-center gap-[12px] text-blue-400 w-[437px]">
              <p className="capitalize text-[16px] whitespace-nowrap text-ellipsis leading-normal line-clamp-1">
                5.354708943431563,-3.9874719330168893
              </p>
              <button className="flex gap-[10px] items-center text-[16px] border border-blue-400 px-[20px] py-[15px] rounded-[4px]">
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
            className={`md:w-[97%] lg:flex-1 lg:h-full overflow-hidden flex-shrink-0 custom-transition `}
          >
            <MapBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localization;
