import ArrowLeft from "@/utils/icons/ArrowLeft";
import BoldFlagIcon from "@/utils/icons/BoldFlagIcon";
import CrossIcon from "@/utils/icons/CrossIcon";
import DoneIcon from "@/utils/icons/DoneIcon";
import ErrorIcon from "@/utils/icons/ErrorIcon";
import HeartIcon from "@/utils/icons/HeartIcon";
import ImageSlider from "@/components/ImageSlider";
import LetterIcon from "@/utils/icons/LetterIcon";
import RatingLeft from "@/components/Ratings/RatingLeft";
import RatingRight from "@/components/Ratings/RatingRight";
import ShareIcon from "@/utils/icons/ShareIcon";
import SquareShareIcon from "@/utils/icons/SquareShareIcon";
import WarningIcon from "@/utils/icons/WarningIcon";
import { displayData } from "@/utils/mock/Data/DisplayData";

interface PageProps {
    params: any;
}
const page: React.FC<PageProps> = ({ params }) => {
    const { flatId } = params;

    const flat = displayData.find((data) => data.id === flatId)
    if (!flat) return
    return (
        <div className="w-full h-full flex flex-col items-start justify-start px-[16px]">
            <div className="flex flex-col gap-[14.89px] w-full">
                {/* top section */}
                <div className="w-full flex flex-col justify-start items-start ">
                    <h1 className="text-[24px] font-[500]">Flat</h1>
                    <div className="w-full flex items-center justify-end gap-[29.29px]">
                        <div className="center gap-[5.64px]">
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><BoldFlagIcon /></div>
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><SquareShareIcon /></div>
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><ShareIcon /></div>
                            <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><HeartIcon /></div>
                        </div>
                        <div className="w-[31px] h-[31px] center rounded-full bg-[#EFF4FB]"><CrossIcon /></div>
                    </div>
                </div>


                <div className="w-full h-[200px] relative overflow-hidden ">
                    <ImageSlider imgData={flat.images} width={617} height={297} />
                </div>

            </div>


            {/* flat details */}
            <div className="flex justify-between items-center w-full mt-[27px] flex-wrap gap-[10px] my-[10px] xsm:mt-[21px] xsm:mb-[24px]">
                <p className="text-[16px] italic font-[300]">{flat.subName}</p>
                <h2 className="text-[24px] font-[700]">{flat.price}</h2>
                <button className="w-[93px] center gap-[10px] bg-[#F0F2F6] rounded-[6px] pt-[9px] pb-[11px]">
                    Apply <ArrowLeft />
                </button>
            </div>


            {/* flat area info */}

            <div className="flex flex-col items-start justify-start gap-[6.22px] mt-[2px] mb-[22px]">
                {
                    flat.rooms.map((room, i) => <p
                        key={i + "jj"}
                        className="font-[500] textt-[14px]"
                    >
                        {room}
                    </p>)
                }
            </div>


            {/* google ads*/}
            <div className="w-full min-h-[36px] bg-[#8D4E83] mx-auto center text-white">
                Google ads
            </div>


            {/* VIEWS AND APPLY */}

            <div className="w-full center gap-[10px] mt-[14px] flex-wrap">

                <div className="p-[9px] flex items-center justify-start gap-[12px] border-[1px] border-[#EAEBF0] rounded-[10px]">
                    <LetterIcon />
                    <div className="flex flex-col items-start justify-start">
                        <h3 className="text-[#272D37] font-[600] text-[15px] xsm:text-[22px]">{flat.views}</h3>
                        <p className="text-[12px] xsm:text-[14px]">Total Viewing</p>
                    </div>
                </div>

                <div className="p-[9px]  flex items-center justify-start gap-[12px] border-[1px] border-[#EAEBF0] rounded-[10px]">
                    <LetterIcon />
                    <div className="flex flex-col items-start justify-start">
                        <h3 className="text-[#272D37] font-[600] text-[15px] xsm:text-[22px]">{flat.apply}</h3>
                        <p className="text-[12px] xsm:text-[14px]">Total Applies</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <div className="center gap-[4px]">
                        <DoneIcon />
                        <p className="text-[14px] font-[500]">Requirements 1</p>
                    </div>
                    <div className="center gap-[4px]">
                        <DoneIcon />
                        <p className="text-[14px] font-[500]">Requirements 1</p>
                    </div>
                    <div className="center gap-[4px]">
                        <WarningIcon />
                        <p className="text-[14px] font-[500]">Requirements 1</p>
                    </div>
                    <div className="center gap-[4px]">
                        <ErrorIcon />
                        <p className="text-[14px] font-[500]">Requirements 1</p>
                    </div>
                </div>

            </div>


            {/* description */}
            <div className="mt-[14px]">
                <p className="leading-[20px] text-[14px] font-[500]">আমাদের চ্যানেলে 4k Video quality এবং HD sound quality তে একজন আদর্শ  মানুষের জীবন কেমন হওয়া উচিৎ, ইতিহাসের শিক্ষনীয় ঘটনা এবং ইসলামী জীবন বিধান সম্পর্কে জানতে পারবেন। <br /> <br /> আমাদের চ্যানেলে 4k Video quality এবং HD sound quality তে একজন আদর্শ  মানুষের জীবন কেমন হওয়া উচিৎ, ইতিহাসের শিক্ষনীয় ঘটনা এবং ইসলামী জীবন বিধান সম্পর্কে জানতে পারবেন...more। </p>
            </div>


            {/* reviews */}

            <div className="w-full min-h-[100px] flex-wrap xsm:flex-nowrap center gap-[20px] mt-[26px]">
                <RatingLeft />
                <RatingRight />

            </div>

        </div>
    );
};

export default page;