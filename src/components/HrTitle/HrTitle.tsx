const HrTitle = ({text}: {text: string}) => {
    return (
        <div className="relative my-5 lg:w-[700] xl:w-[1200px] 2xl:w-[1462px] mx-auto w-[90%]">
            <hr className="border-[1px] border-[#C6C2DE]" />
            <span className="absolute p-1 bg-white text-[18px] font-[500] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                {text}
            </span>
        </div>
    );
};

export default HrTitle;
