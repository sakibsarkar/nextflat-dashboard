import EnableBox from "../EnableBox/EnableBox";
import FilterBox from "../FilterBox/FilterBox";
import InputFeild from "../InputFeild/InputFeild";
import WhatIsInclude from "../WhatIsInclude/WhatIsInclude";

const RoomOptions = () => {
  return (
    <>
      <section className="flex flex-col xl:flex-row gap-[30px] xl:gap-[0]">
        <div className="flex-1 grid grid-cols-5 gap-[30px] xl:gap-[0]">
          <div className="col-span-12 lg:col-span-3 flex flex-row flex-wrap xl:flex-col gap-[20px]">
            <div className="flex flex-col lg:flex-row gap-[36px] items-center">
              <div className="relative w-[157px] h-[63px]">
                <InputFeild text="Floor" placeholder="4" />
              </div>

              <div className="flex flex-col gap-2">
                <EnableBox text="Roof Top" />
                <EnableBox text="Ground Floor" />
              </div>
            </div>
            <EnableBox text="Balcony / Terrace" />
            <EnableBox text="Basement" />
            <div className="flex flex-col lg:flex-row gap-2">
              <EnableBox text="Garden" />

              <div className="relative w-[157px] h-[63px] mt-[12px]">
                <InputFeild text="Garden Size (M2)*" placeholder="4" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <EnableBox text="Agency" />
              <div className="relative w-[157px] h-[63px] mt-[12px]">
                <InputFeild text="Agency Fees" placeholder="7%" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              <EnableBox text="Private Parking" />
              <div>
                <button className="bg-[#5956E9] text-white text-[10px] p-2 rounded-md flex items-center gap-2">
                  Add a Bedroom to rent separately{" "}
                  <div className="h-[12px]">+</div>
                </button>
              </div>
            </div>
            <EnableBox text="Electric car charging station" />
            <EnableBox text="Walk-In Closet" />
            <EnableBox text="Built in Wardrobes" />
            <EnableBox text="Shared Laundry" />
            <EnableBox text="Shard Pool" />
          </div>
          <div className="col-span-12 lg:col-span-2 flex flex-wrap gap-8">
            <EnableBox text="Fiber Deployed" />
            <EnableBox text="Intercorn" />
            <EnableBox text="Handicap Access" />
            <EnableBox text="Elevator" />
            <EnableBox text="Shared Spa" />
            <EnableBox text="Concierge Service" />
            <EnableBox text="Shared Gym" />
            <EnableBox text="Pets Allowed" />
            <FilterBox
              optionArr={["City", "Mountain", "Park", "Water"]}
              placeholder="View"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-col lg:flex-row gap-2">
            <EnableBox text="Housing Charges" />

            <div className="relative w-[157px] h-[63px] mt-[12px]">
              <InputFeild text="Avg Price/Month" placeholder="150$" />
            </div>
          </div>
          <WhatIsInclude
            serviceArr={["Cleaning Service", "Healting", "Water", "Internet"]}
          />
          <div className="relative w-[309px] h-[63px]">
            <InputFeild
              text="Energy Performance Diagnostic level (kWh)"
              placeholder="160"
            />
          </div>

          <div className="flex flex-col lg:flex-row  gap-[25px]">
            <EnableBox text="Deposit" />

            <div className="relative w-[157px] h-[63px] mt-[12px]">
              <InputFeild text="Avg Price/Month" placeholder="150$" />
            </div>
            <EnableBox text="Already Rent" />
          </div>
          <div>
            <p>Description</p>

            <textarea className="lg:min-h-[180px] lg:max-h-[180px] p-3 bg-gray-100 rounded-md resize-y overflow-auto w-full lg:w-[400] xl:w-[631px]" />
          </div>
          <EnableBox text="Urgent *" />
        </div>
      </section>
    </>
  );
};

export default RoomOptions;
