import Cards from "@/components/Cards/Cards";
import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto h-screen flex items-start justify-start flex-col">
            <Navbar />
            <div className="w-full flex sectionHeight justify-between items-start gap-[6px]">
                <div className="min-w-[400px] h-full">
                    <MapBox />
                </div>

                <div className="w-full h-full overflow-auto">
                    <Cards />
                </div>

                <div className="min-w-[470px] h-full bg-green-400">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;