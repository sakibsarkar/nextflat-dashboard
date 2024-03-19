import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import React, { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="w-full h-screen flex items-start justify-start flex-col">
            <Navbar />
            <div className="w-full flex sectionHeight justify-between items-start">
                <div className="min-w-[400px] h-full">
                    <MapBox />
                </div>

                <div className="w-full h-full overflow-auto bg-red-300">

                </div>

                <div className="min-w-[470px] h-full bg-green-400">

                </div>
            </div>
        </div>
    );
};

export default layout;