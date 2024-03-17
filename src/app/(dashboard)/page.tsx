import DisplayCard from "@/Cards/DisplayCard/DisplayCard";
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
        </div>




        <div className="w-full h-full pl-[17px] pr-[12.28px] overflow-y-auto flex flex-col gap-[6px]">
          {
            displayData.map((data, i) => <DisplayCard key={"dt" + i} data={data} />)
          }
        </div>
      </div>
    </main>
  );
}
