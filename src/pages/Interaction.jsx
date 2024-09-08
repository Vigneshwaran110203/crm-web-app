import { interactionData as interaction } from "../assets/interaction"

const Interaction = () => {
    return(
        <div className="bg-white rounded h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-1 p-4">Customer Interaction</h3>
            <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {interaction.interactions.map((interaction, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded shadow">
                        <img src={interaction.image} alt="" className="rounded-full size-16 mb-2" />
                        <h3 className="text-lg font-semibold mb-2">{interaction.customerName}</h3>
                        <p className="text-sm text-gray-600"><strong>Interaction Type:</strong> {interaction.interactionType}</p>
                        <p className="text-sm text-gray-600"><strong>Date:</strong> {interaction.date}</p>
                        <p className="text-sm text-gray-600"><strong>Details:</strong> {interaction.details}</p>
                        <p className="text-sm text-gray-600"><strong>Next Step:</strong> {interaction.nextStep}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Interaction