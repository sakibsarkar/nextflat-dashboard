"use client";
import AngleDownIcon from "@/utils/icons/AngleDownIcon";
import FlagIcon from "@/utils/icons/FlagIcon";
import HousePlusIcon from "@/utils/icons/HousePlusIcon";
import Image from "next/image";
import Link from "next/link";
import ModeChangerToggle from "@/utils/toggleButtons/ModeChangerToggle";
import SearchIcon from "@/utils/icons/SearchIcon";
import { MenuIcon } from "@/utils/icons/MenuIcon";

const Navbar = () => {
    const handleChange = () => {
        console.log("hey")
    }
    return (
        <header className="w-full h-[76px] sticky top-0 z-50 bg-white">

            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[33.56px]">
                    <Image src={"/images/Logo.png"} alt="logo" width={154.56} height={76} />
                    <div className="md:flex justify-start items-center gap-[19.34px] hidden">
                        <SearchIcon />
                        <input type="text" className="bg-transparent outline-none h-[18px] max-w-[214px]" placeholder="Type to search a localisation......" />
                    </div>
                </div>
                <nav>
                    <div className="hidden justify-start items-center gap-[18.33px] pr-[4px] md:flex">

                        <ModeChangerToggle onClick={handleChange} />

                        <div className="relative">
                            <FlagIcon />
                            <div className="absolute bg-[#d9d9d9] rounded-full top-[22px] left-[17.59px]">
                                <AngleDownIcon />
                            </div>
                        </div>

                        <Link href={"/"} className="text-[16px] font-[500] text-white w-[168.269px] h-[30px] bg-[#3C50E0] pl-[10.32px] flex justify-start items-center gap-[8.33px] rounded-full"><HousePlusIcon />Create an Ad</Link>

                        <Link href={"/"} className="text-[16px] font-[500] text-white w-[168.269px] h-[30px] bg-[#3C50E0] flex justify-center items-center gap-[8.33px] rounded-full">Log in / Sign up</Link>

                    </div>

                    <div className="center md:hidden p-[12px]">
                        <MenuIcon />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;