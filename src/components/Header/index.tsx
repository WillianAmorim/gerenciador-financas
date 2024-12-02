import { IoIosArrowDropleftCircle } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className="flex max-h-16 p-4 border-b-2 bg-[#F4F3EF] flex-grow justify-between">
            <div className="flex items-center gap-4">
                <IoIosArrowDropleftCircle className="text-4xl" />
                <p>Paper Dashboard PRO React</p>
            </div>
            <div className="flex items-center gap-8 pr-8">
                <div className="flex items-center pr-2 rounded-md bg-[#EDEDEA]">
                    <input placeholder="Search" className="bg-[#EDEDEA] w-44 pl-2 py-2 rounded-md focus:outline-none focus:border-none" type="text" /><CiSearch />
                </div>
                <CiBellOn />
                <CiSettings />
            </div>
        </header>
    )
}

export default Header