import ChartBox from "@/components/ChartBox/ChartBox";
import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import { ReactNode } from "react";
import { chartData } from "@/utils/mock/ChartData/chartData";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="mx-auto max-w-[1440px] h-screen flex flex-col items-start justify-start gap-[31px]">
            <Navbar />
            <main className="h-full w-full flex justify-start items-start gap-[16px]  ">

                <div className="w-full h-full">
                    {children}
                </div>

                <div className="xl:min-w-[746px] h-full">
                    <MapBox />
                    <div className="w-[746px] h-[238px]">
                        <ChartBox chartData={chartData} />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default layout;