"use client";
import { useState } from "react";

type DataType = {
    onClick?: Function
}

const ToggleButton: React.FC<DataType> = ({ onClick = () => { } }) => {

    // *** toggle state-----
    const [isOn, setIsOn] = useState<boolean>(false)

    // toggle button click
    const handleToggle = () => {

        // change the toggle state
        setIsOn(!isOn)

        //------ return the callback function -------

        return onClick()

    }

    return (
        <div className={`w-[57px] h-[26px] ${isOn ? "bg-[#cfcfcf]" : "bg-[#E2E8F0]"} rounded-full relative py-[1px]`}>
            <div className={`h-[24px] w-[24px] rounded-full bg-white  absolute ${isOn ? "right-[3px]" : "left-[3px]"} center  cursor-pointer duration-[0.6s]`} onClick={handleToggle}>
            </div>
        </div>
    );
};

export default ToggleButton;