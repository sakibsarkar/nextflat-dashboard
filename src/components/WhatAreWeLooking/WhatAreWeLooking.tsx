import EnableBox from "../EnableBox/EnableBox";
import FilterBox from "../FilterBox/FilterBox";
import HrTitle from "../HrTitle/HrTitle";
import InputFeild from "../InputFeild/InputFeild";
const WhatAreWeLooking = () => {
  const optionArr1 = ["Self-employed", "Unemployed", "Student", "Employed"];

  return (
    <section className="w-full">
      <HrTitle text="Who are you looking for" />
      <div className="w-full flex items-center justify-center xsm:justify-between lg:justify-start 2xl:gap-[466px] lg:gap-[50px] gap-[20px] flex-wrap lg:flex-nowrap">
        <div className="flex items-center justify-center sm:justify-between lg:justify-start gap-[66px] w-full lg:w-[unset] flex-wrap">
          <FilterBox optionArr={optionArr1} placeholder="Working Status" />
          <FilterBox optionArr={optionArr1} placeholder="Working Status" />
        </div>

        <div className="min-w-[340px] xsm:max-w-[none] xsm:min-w-[325px] h-[325px] center border-[1px] border-[#e4e4e499] rounded-sm flex-col gap-[9px] xsm:flex-1 lg:flex-[unset]">
          <h2 className="text-[28px] text-[#131313] italic">Drop files here</h2>
          <p>or</p>
          <button className="w-[150px] bg-[#6979F8] py-[14px] text-white rounded-md">
            Browse
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center sm:justify-start mt-[19px] lg:gap-[120px] flex-wrap gap-[20px]">
        <EnableBox text="Guarantor allow or request" />
        <div className="relative w-[269px] h-[63px]">
          <InputFeild text="Other" />
        </div>
      </div>
      <div className="mt-[36px] flex items-center justify-center lg:justify-start gap-[50px] lg:gap-[160px] flex-wrap">
        <div className="relative w-[269px] h-[63px]">
          <InputFeild text="Minimum salary request" placeholder="0 $ / month" />
        </div>
        <div className="relative w-[222px] h-[63px]">
          <InputFeild text="Set your availability for tour" type="date" />
        </div>
        <button className="max-w-[300px] min-h-[49px] bg-[#6979F8] text-[16px] font-[400] rounded-md text-white">
          Are you looking for an Real estate agent or agency?
        </button>
      </div>

      <div className="w-full flex items-center justify-center xsm:justify-end gap-[15px] flex-wrap mt-[69px]">
        <button className="py-[11px] px-[30px] border-[1px] border-[#3C50E0] text-[#3C50E0] rounded-[4px]">
          Save this ads in draft
        </button>
        <button className="py-[11px] px-[30px] border-[1px] bg-[#3C50E0] text-white rounded-[4px]">
          Save this ads in draft
        </button>
      </div>
    </section>
  );
};

export default WhatAreWeLooking;
