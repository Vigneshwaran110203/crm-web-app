import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CRMContext } from "../context/CRMcontext";

const Sidebar = () => {

    const { isOpen } = useContext(CRMContext)

    const [isActive, setIsActive] = useState("home")

    return(
        <div
            className={`transition-all duration-300 ease-in-out ${isOpen ? 'w-60 fixed top-32 left-4 z-50 block md:static' : 'hidden lg:block w-20'} bg-white rounded-md px-4 py-8 md:h-full md:static`}
            >
            <ul className="space-y-10">
                <li>
                <Link to="/" onClick={() => setIsActive("home")} className={`flex ${isOpen ? 'gap-4': 'gap-0 justify-center'} ${isActive === "home" ? 'font-bold text-[1.125rem] text-purple-500' : ""} items-center text-base font-medium hover:text-blue-600`}>
                    <MdSpaceDashboard className="icons" />
                    <span className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Dashboard
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/customers" onClick={() => setIsActive("customers")} className={`flex  ${isOpen ? 'gap-4': 'gap-0 justify-center'} ${isActive === "customers" ? 'font-bold text-[1.125rem] text-purple-500' : ""} items-center text-base font-medium hover:text-blue-600`}>
                    <FaUsers className="icons" />
                    <span className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Customers
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/leads" onClick={() => setIsActive("leads")} className={`flex ${isActive === "leads" ? 'font-bold text-[1.125rem] text-purple-500' : ""} ${isOpen ? 'gap-4': 'gap-0 justify-center'} items-center text-base font-medium hover:text-blue-600`}>
                    <AiFillContacts className="icons" />
                    <span className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Leads
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/sales" onClick={() => setIsActive("sales")} className={`flex ${isActive === "sales" ? 'font-bold text-[1.125rem] text-purple-500' : ""} ${isOpen ? 'gap-4': 'gap-0 justify-center'} items-center text-base font-medium hover:text-blue-600`}>
                    <IoBarChartSharp className="icons" />
                    <span className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Sales
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/interactions" onClick={() => setIsActive("interactions")} className={`flex ${isActive === "interactions" ? 'font-bold text-[1.125rem] text-purple-500' : ""} ${isOpen ? 'gap-4': 'gap-0 justify-center'} items-center text-base font-medium hover:text-blue-600`}>
                    <BiSolidMessageDetail className="icons" />
                    <span className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Interactions
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/support-ticket" onClick={() => setIsActive("support")} className={`flex ${isActive === "support" ? 'font-bold text-[1.125rem] text-purple-500' : ""} ${isOpen ? 'gap-4': 'gap-0 justify-center'} items-center text-base font-medium hover:text-blue-600`}>
                    <MdOutlineSupportAgent className="icons" />
                    <span className={`transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    Support
                    </span>
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar