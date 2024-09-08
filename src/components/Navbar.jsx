import { useContext } from "react";
import Profile from "../assets/profile-pic.png"
import { MdMenu } from "react-icons/md";
import { CRMContext } from "../context/CRMcontext";

const Navbar = () => {

    const { isOpen, setIsOpen } = useContext(CRMContext);

    const handleMenu = () => {
        setIsOpen(isOpen => !isOpen)
    }

    return(
        <nav className="shadow-md bg-white flex justify-between items-end p-4 pb-6 rounded-lg">
            <div className="flex items-end gap-4">
                <MdMenu className="text-2xl sm:text-3xl cursor-pointer" onClick={handleMenu} />
                <span className="logo">crm-app</span>
            </div>
            <div className="flex items-center gap-4">
                <p className="font-semibold text-base sm:text-lg">Hi, Vignesh</p>
                <img src={Profile} alt="" className="rounded-full size-7 sm:size-8" />
            </div>
        </nav>
    )
}

export default Navbar