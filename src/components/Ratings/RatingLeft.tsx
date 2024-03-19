import StarIcon from "@/utils/icons/StarIcon";

const RatingLeft = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-[3px] w-full">
            <h3 className="font-bold">Overall Apartment Rating (23)</h3>
            <div className="flex items-center gap-2">

                <StarIcon />

                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">3.6</span>
                    <span className="font-light">stars</span>
                </div>
            </div>
            <p className="text-xs">
                The number in parenthesis is the number of customers who have rated
            </p>
        </div>
    );
};

export default RatingLeft;