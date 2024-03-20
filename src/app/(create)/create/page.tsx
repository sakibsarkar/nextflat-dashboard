import BasicInfo from "@/components/BasicInfo/BasicInfo";
import InputFeild from "@/components/InputFeild/InputFeild";
import Localization from "@/components/Localization/Localization";
import MapBox from "@/components/MapBox/MapBox";

const page = () => {
  return (
    <main className="px-[92px] w-full">
      <div className="w-full center gap-[19px] flex-col">
        <h2 className="text-[32px] font-[500]">Create a new ads</h2>
        <p className="text-[16px] font-[400]">
          Welcome to our form where you add as much information as need about
          your property
        </p>

        <div className="flex justify-start items-end gap-[60px] w-full mt-[32px]">
          <div className="relative w-[359px] h-[63px]">
            <InputFeild placeholder="Your email" text="Email Address" />
          </div>

          <div className="flex flex-col items-start justify-start gap-[11px]">
            <p className="font-[500] text-[16px]">Phone Number</p>
            <div className="p-[10px] flex items-center justify-start gap-[12px] bg-[#fafbfc] border-[1px] border-[#E0E4EC] w-[358px] h-[52px] rounded-[8px]">
              <p>+1</p>
              <div className="w-[1px] h-full bg-[#E0E4EC]"></div>
              <input
                type="text"
                placeholder="Please enter your phone number"
                className="w-full h-full outline-none"
              />
            </div>
          </div>

          <p className="text-[16px] font-[400]">
            Please enter your email address and phone number to not lose your
            progress
          </p>
        </div>

        {/* Localization */}

        <Localization />
        <BasicInfo />
      </div>
    </main>
  );
};

export default page;
