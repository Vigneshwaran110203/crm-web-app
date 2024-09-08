import { customersData } from "../assets/customers"
import { GoDotFill } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Customers = () => {

    return(
        <div className="bg-white rounded h-[80vh] overflow-y-auto p-4">
            <h3 className="text-xl font-semibold mb-4">Customer Details</h3>
            {customersData.customers.map((data, index) => {
                return(
                    <div key={index} className="flex flex-col items-center flex-wrap sm:flex-row gap-4 sm:items-center justify-evenly bg-gray-50 p-4 mb-4 rounded shadow">
                        <img src={data.image} alt="" className="size-16 rounded-full" />
                        <div className="text-base flex flex-col items-center md:items-start">
                            <h4 className="flex gap-2 items-center"><FaUserAlt /> {data.name}</h4>
                            <h4 className="flex gap-2 items-center"><IoMail /> {data.email}</h4>
                            <h4 className="flex gap-2 items-center"><FaPhoneAlt /> {data.phone}</h4>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row lg:gap-4 md:flex-col md:gap-0 md:items-start">
                            <h4 className="flex gap-0 sm:gap-2">
                                <span className="text-base font-semibold">Status:</span>
                                <span className="flex gap-1 items-center">
                                    <GoDotFill className={data.status === "Active" ? "text-green-500": "text-red-500"} /> 
                                    {data.status}
                                </span>
                            </h4>
                            <h4>
                                <span className="text-base font-semibold">Last Login: </span> 
                                {data.lastInteraction}
                            </h4>
                            <h4>
                                <span className="text-base font-semibold">Lifetime Value: </span>
                                {data.lifetimeValue}
                            </h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Customers