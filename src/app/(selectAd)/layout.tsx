import Cards from "@/components/Cards/Cards";
import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto xl:h-screen flex items-start justify-start flex-col">
            <Navbar />
            <div className="w-full flex flex-col-reverse xl:flex-row xl:sectionHeight justify-between items-center gap-[6px] xl:items-start">
                <div className="w-full xl:min-w-[400px] xl:max-w-[400px] h-full">
                    <MapBox />
                </div>

                <div className="w-full xl:h-full xl:overflow-auto">
                    <Cards />
                </div>

                <div className="xl:min-w-[470px] xl:max-w-[470px] xl:h-full overflow-auto smoothBar pb-[37px]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;