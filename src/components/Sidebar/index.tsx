import ImgProfile from '../../assets/profile.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { PiBankDuotone } from "react-icons/pi";

const Sidebar = () => {
    return (
        <div className="min-w-[20%] min-h-[100vh] bg-[#5D5853] p-4">
            <h1 className="border-b-[1px] p-3 text-center text-white">CREATIVE TIM</h1>
            <div className='flex items-center justify-between px-2 py-1 border-b-[1px]'>
                <div className='flex items-center py-3 gap-3'>
                    <img src={ImgProfile} alt="" className='w-8 rounded-full' />
                    <p className='text-white text-sm'>Chet Faker</p>
                </div>
                <IoMdArrowDropdown className='text-white' />
            </div>
            <ul className='p-2 flex flex-col'>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
                <li className='p-4 text-white flex items-center gap-3'>
                    <PiBankDuotone />
                    <div>DASHBOARD</div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar