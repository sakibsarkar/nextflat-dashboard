import Navbar from "@/shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col max-w-[1440px] mx-auto">
            <Navbar />
            {children}
        </div>
    );
};

export default layout;