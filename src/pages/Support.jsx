import { supportData as supportTicket } from "../assets/support"

const Support = () => {
    return(
        <div className="bg-white rounded h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-1 p-4">Customer Interaction</h3>
            <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {supportTicket.supportTickets.map((ticket, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded shadow">
                        <img src={ticket.image} alt="" className="rounded-full size-16 mb-2"/>
                        <h3 className="text-lg font-semibold mb-2">{ticket.customerName}</h3>
                        <p className="text-sm text-gray-600"><strong>Issue Type:</strong> {ticket.issueType}</p>
                        <p className="text-sm text-gray-600"><strong>Status:</strong> {ticket.status}</p>
                        <p className="text-sm text-gray-600"><strong>Priority:</strong> {ticket.priority}</p>
                        <p className="text-sm text-gray-600"><strong>Assigned Agent:</strong> {ticket.assignedAgent}</p>
                        <p className="text-sm text-gray-600"><strong>Created Date:</strong> {ticket.createdDate}</p>
                        <p className="text-sm text-gray-600"><strong>Last Update:</strong> {ticket.lastUpdate}</p>
                        <p className="text-sm text-gray-600"><strong>Details:</strong> {ticket.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Support