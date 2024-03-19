import QuestionIcon from "@/utils/icons/QuestionIcon";
import React from "react";
import StarIcon from "@/utils/icons/StarIcon";
import StartBlankIcon from "@/utils/icons/StartBlankIcon";

const RatingRight = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <p className="flex items-center gap-1">
                    <span className="text-[10px]">Experience (22)</span>
                    <QuestionIcon />
                </p>
                <div className="flex items-center gap-1">
                    <span className="center gap-[3px]">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </span>
                    <span className="text-[12px] font-bold">3.5</span>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="flex items-center gap-1">
                    <span className="text-[10px]">Location (21)</span>
                    <QuestionIcon />
                </p>
                <div className="flex items-center gap-1">
                    <span className="center gap-[3px]">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StartBlankIcon />
                        <StartBlankIcon />
                    </span>
                    <span className="text-[12px] font-bold">3.5</span>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="flex items-center gap-1">
                    <span className="text-[10px]">Cleanliness (21)</span>
                    <QuestionIcon />
                </p>
                <div className="flex items-center gap-1">
                    <span className="center gap-[3px]">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StartBlankIcon />
                    </span>
                    <span className="text-[12px] font-bold">3.5</span>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="flex items-center gap-1">
                    <span className="text-[11px]">Condition,(22)</span>
                    <QuestionIcon />
                </p>
                <div className="flex items-center gap-1">
                    <span className="center gap-[3px]">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StartBlankIcon />
                        <StartBlankIcon />
                    </span>
                    <span className="text-[12px] font-bold">3.5</span>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="flex items-center gap-1">
                    <span className="text-[10px]">Building (21)</span>
                    <QuestionIcon />
                </p>
                <div className="flex items-center gap-1">
                    <span className="center gap-[3px]">
                        <StarIcon />
                    </span>
                    <span className="text-[12px] font-bold">3.5</span>
                </div>
            </div>
        </div>
    );
};

export default RatingRight;
