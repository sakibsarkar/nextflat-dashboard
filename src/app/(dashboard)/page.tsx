import ArrowDownIcon from "@/utils/icons/ArrowDownIcon";
import DisplayCard from "@/Cards/DisplayCard/DisplayCard";
import MoneyIcon from "@/utils/icons/MoneyIcon";
import ShortByIcon from "@/utils/icons/ShortByIcon";
import ToggleButton from "@/utils/toggleButtons/ToggleButton";
import { displayData } from "@/utils/mock/Data/DisplayData";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-[18px] w-full h-full">

        <div className="flex justify-between items-center pl-[25px]">
          <div className="flex justify-start items-center gap-[8px]">
            <p>Sale</p>
            <ToggleButton />
            <p>Rent</p>
          </div>

          <div className="flex justify-between items-center gap-[16px] p-[12px]">
            <MoneyIcon />
            <p>Price</p>
            <ArrowDownIcon />
          </div>

          <div className="flex justify-between items-center gap-[16px] p-[12px]">
            <ShortByIcon />
            <p>Sort By</p>
            <ArrowDownIcon />
          </div>

        </div>




        <div className="w-full h-full pl-[15px] pr-[8px] overflow-y-auto flex flex-col gap-[6px] smoothBar">
          {
            displayData.map((data, i) => <DisplayCard key={"dt" + i} data={data} />)
          }
        </div>
      </div>
    </main>
  );
}
