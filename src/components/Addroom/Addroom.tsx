import EnableBox from "../EnableBox/EnableBox";
import HrTitle from "../HrTitle/HrTitle";
import InputFeild from "../InputFeild/InputFeild";
import TwoGrid from "../TwoGrid/TwoGrid";
import WhatIsInclude from "../WhatIsInclude/WhatIsInclude";

const Addroom = ({
  title,
  isUrgent,
}: {
  title: string;
  isUrgent?: boolean;
}) => {
  return (
    <div className="my-[40px] w-full">
      <HrTitle text={title} />
      <section className="lg:mt-[32px] flex flex-col gap-[30px] lg:flex-row lg:gap-[50px]">
        <div className="flex-1 flex flex-col  justify-start xl:flex-nowrap xl:flex-col items-start xl:justify-start gap-[10px]">
          <EnableBox text="Private Bedroom" />
          <EnableBox text="Private Balcony" />
          <div className="flex gap-3 items-start">
            <EnableBox text="Furniture" />
            <WhatIsInclude
              serviceArr={[
                "Desk",
                "Wardrobe",
                "Bed",
                "Washer / dryer",
                "other",
              ]}
            />
          </div>
          <div className="flex gap-5 mt-[20px]">
            <div className="w-[169px] h-[63px] relative">
              <InputFeild text="Rent Amount ($)*" placeholder="500" />
            </div>
            <div className="relative w-full sm:w-[256px] h-[63px] flex justify-between  items-center border-[1px] border-[#868686] rounded-[8px]  p-[15px]">
              <input
                type="text"
                placeholder="200$/"
                className="w-full h-full outline-none"
              />
              <p className="text-[#31C65B] w-fit">12.5 $/m2</p>
              <p className="absolute px-[5px] text-[14px] font-[300] bg-white text-[#868686] left-[15px] top-[-15px]">
                Surface (m2)*
              </p>
            </div>
          </div>
          <div className="flex mt-[20px] items-stretch flex-wrap gap-[20px]">
            <div className="lg:self-start">
              {isUrgent ? (
                <EnableBox text="Already Rent" />
              ) : (
                <EnableBox text="Already rent" />
              )}
            </div>

            <div className="w-[169px] h-[63px] relative">
              <InputFeild text="Rent Amount ($)*" placeholder="500" />
            </div>

            <div className="lg:self-end">
              {isUrgent ? <EnableBox text="Urgent" /> : null}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <TwoGrid />
        </div>
      </section>
    </div>
  );
};

export default Addroom;
