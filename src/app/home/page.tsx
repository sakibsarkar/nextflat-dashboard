import MessageIcon from "@/utils/icons/MessageIcon";
import Image from "next/image";

const HomePage = () => {
  return (
    <section>
      <div className="w-full bg-red-300 h-[350px] relative flex justify-center">
        <Image
          src="/images/home.png"
          alt=""
          width={600}
          height={300}
          className="w-full h-full"
        />
        <div className="absolute bottom-[-60px] h-[250px] md:h-[220px] w-[90%] md:w-[700px] bg-[#262637] rounded-md px-[40px] py-[32px]">
          <h1 className="text-[#00DEB6] text-[24px] md:text-[36px] font-medium text-center">
            Find your happy
          </h1>
          <p className="text-white text-center text-[16px] md:text-[18px] pt-[4px]">
            Search properties for sale and to rent in the UK
          </p>
          <div className="flex flex-col md:flex-row gap-[12px] pt-[16px]">
            <input
              className="px-3 rounded-sm w-full"
              type="text"
              placeholder="e.g 'York', 'NW3','NW3 5ty' or Waterloo "
            />
            <div className="flex justify-center gap-[10px]">
              <button className="bg-[#00DEB6] rounded-sm text-[16px] leading-[120%] capitalize py-[8px] px-[12px] min-w-[100px]">
                For Sale
              </button>
              <button className="bg-[#00DEB6] rounded-sm text-[16px] leading-[120%] capitalize py-[8px] px-[12px] min-w-[100px]">
                To Rent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full px-[32px] lg:px-[0px] lg:w-[800px] mx-auto mt-[100px] pb-[20px]">
        <div className="lg:w-[200px]">
          <h4 className="font-bold text-[24px] leading-[120%]">
            Welcome to Next Flat: Exceptional Real Estate experiences
          </h4>
          <p className="pt-[12px] text-[16px] leading-[140%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id animi
            ipsa corporis aliquam nihil culpa temporibus placeat ullam neque
            soluta?
          </p>
          <button className="rounded-3xl bg-[#00DEB6] px-[20px] py-[8px] text-white mt-[28px]">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] pt-[40px] lg:pt-0">
          <div className="px-[20px] pt-[28px] pb-[32px] bg-[#DCF7F0] rounded-md lg:w-[250px] h-fit">
            <div className="w-[30px] h-[28px] bg-[#00DEB6] rounded-full flex justify-center items-center">
              <MessageIcon width={24} height={24} />
            </div>
            <h5 className="pt-[16px] font-medium text-[16px]">
              Property Listing
            </h5>
            <p className="line-clamp-1 pt-[12px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="px-[20px] pt-[28px] pb-[32px] bg-[#DCF7F0] rounded-md lg:w-[250px] h-fit">
            <div className="w-[30px] h-[28px] bg-[#00DEB6] rounded-full flex justify-center items-center">
              <MessageIcon width={24} height={24} />
            </div>
            <h5 className="pt-[16px] font-medium text-[16px]">
              Property Listing
            </h5>
            <p className="line-clamp-1 pt-[12px] text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// DCF7F0

export default HomePage;
