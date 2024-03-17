import GreySunIcon from "../icons/GreySunIcon";
import { useState } from "react";

type DataType = {
    onClick: Function
}

const ModeChangerToggle: React.FC<DataType> = ({ onClick }) => {

    const boxShadow = {
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px -1px 1px 0px rgba(0, 0, 0, 0.10) inset, 0px 2px 2px 0px #FFF inset"
    }

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
        <div className="w-[52.93px] h-[29.62px] bg-[#E2E8F0] rounded-full relative p-[3px]">
            <div className={`h-[24px] w-[24px] rounded-full bg-white  absolute ${isOn ? "right-[2px]" : "left-[2px]"} center  cursor-pointer duration-[0.6s]`} style={boxShadow} onClick={handleToggle}>
                <GreySunIcon />
            </div>
        </div>
    );
};

export default ModeChangerToggle;