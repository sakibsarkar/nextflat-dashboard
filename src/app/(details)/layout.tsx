import ChartBox from "@/components/ChartBox/ChartBox";
import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import { ReactNode } from "react";
import { chartData } from "@/utils/mock/ChartData/chartData";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="mx-auto max-w-[1440px] lg:h-screen flex flex-col items-start justify-start gap-[31px]">
            <Navbar />
            <main className="h-full w-full flex flex-col lg:flex-row justify-start items-start gap-[16px] px-[20px] xl:px-[0]">

                <div className="w-full h-full">
                    {children}
                </div>

                <div className="w-full xl:min-w-[746px] h-full ">
                    <div className="w-full lg:h-full h-[250px]">
                        <MapBox />
                    </div>
                    <div className="w-full h-[238px] mt-[30px]">
                        <ChartBox chartData={chartData} />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default layout;