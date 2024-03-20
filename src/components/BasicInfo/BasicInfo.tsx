"use client";
import ArrowDownIcon from "@/utils/icons/ArrowDownIcon";
import EditPenIcon from "@/utils/icons/EditPenIcon";
import SearchIcon from "@/utils/icons/SearchIcon";
import Image from "next/image";

const BasicInfo = () => {
  return (
    <div className="pt-[50px]">
      <h4 className="text-[32px] font-medium leading-normal">
        Basic Information
      </h4>
      <div className="flex gap-[53px] pt-[62px]">
        <div className="flex-1 ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-2 gap-[57px]"
          ></form>

         
        </div>
        <div className="flex-1">
          <div
            className={`md:w-[97%] lg:flex-1 lg:h-full overflow-hidden flex-shrink-0 custom-transition `}
          >
            <div className="grid grid-rows-3 grid-cols-3 gap-4">
              <div className="row-span-2 col-span-2 custom-grid-box w-fit">
                <Image
                  width={578}
                  height={314}
                  src="/images/house.png"
                  alt=""
                />
              </div>
              <div className="row-span-1 col-span-1 custom-grid-box">
                <Image
                  width={290}
                  height={150}
                  src="/images/house1.png"
                  alt=""
                />
              </div>
              <div className="row-span-1 col-span-1 gridBox"></div>
              <div className="row-span-1 col-span-1 gridBox"></div>
              <div className="row-span-1 col-span-1 gridBox"></div>
              <div className="row-span-1 col-span-1 gridBox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
