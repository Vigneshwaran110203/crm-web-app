import { leadsData } from "../assets/leads"

const Leads = () => {
    return(
        <div className="bg-white container rounded h-[84vh] sm:h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2 p-4">
                <h3 className="text-xl font-semibold mb-4">Leads</h3>
                {leadsData.leads.map((data, index) => {
                    return(
                        <div key={index} className="bg-gray-50 p-4 mb-2 rounded shadow flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
                           <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <img src={data.image} alt="" className="size-16 rounded-full" />
                                <h4>{data.name}</h4>
                           </div>
                           <div className="flex flex-col items-center sm:items-start lg:flex-row lg:gap-4 lg:items-center">
                                <h4><span className="font-semibold">Company : </span>{data.company}</h4>
                                <h4><span className="font-semibold">Status : </span>{data.status}</h4>       
                                <h4><span className="font-semibold">Source : </span>{data.source}</h4>       
                           </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Leads