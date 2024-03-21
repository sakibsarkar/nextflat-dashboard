import EnableIcon from "@/utils/icons/EnableIcon";
import React from "react";

const EnableBox = ({text}: {text: string}) => {
    return (
        <div className="flex items-center gap-3">
            <EnableIcon />
            <div>{text}</div>
        </div>
    );
};

export default EnableBox;
