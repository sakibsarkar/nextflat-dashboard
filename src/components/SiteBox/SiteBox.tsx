"use client";
import CrossIcon from "@/utils/icons/CrossIcon";
import React, {useState} from "react";
const SiteBox = () => {
    const [sites, setSites] = useState(["Bienici.com", "Seloger.com", "Zillow.com"]);
    const handleCancel = (i: number) => {
        const replica = [...sites];
        replica.splice(i, 1);
        setSites(replica);
    };

    return (
        <div className="w-[492px] flex flex-wrap justify-start gap-[25px] items-center p-[10px] border-[1px] border-[#868686] rounded-[8px] min-h-[63px] relative">
            {sites.map((site, i) => (
                <div
                    key={i}
                    className="px-[10px] py-[6px] rounded-[4px] bg-[#EFF4FB] flex justify-between items-center"
                >
                    <p>{site}</p>
                    <button onClick={() => handleCancel(i)}>
                        <CrossIcon />
                    </button>
                    <p className="absolute top-[-15px] left-[15px] px-[6px] bg-white text-[#868686] font-[300] text-[12px] xsm:text-[14px]">
                        Did you already publish this property somewhere else:
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SiteBox;
