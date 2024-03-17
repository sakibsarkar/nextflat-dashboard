import ContextProvieder from "@/provider/ContextProvieder/ContextProvieder";
import MapBox from "@/components/MapBox/MapBox";
import Navbar from "@/shared/Navbar/Navbar";
import Sidebar from "@/shared/Sidebar/Sidebar";
import { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ContextProvieder>
            <div className="flex flex-col justify-start items-start h-screen max-w-[1440px] mx-auto overflow-hidden">
                <Navbar />

                {/* bottom  */}
                <div className="h-full w-full flex justify-start items-start bg-red-500">
                    <Sidebar />
                    <MapBox />
                    {children}
                </div>


            </div>
        </ContextProvieder>
    );
};

export default layout;