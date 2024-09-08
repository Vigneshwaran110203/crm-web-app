import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend, ResponsiveContainer } from 'recharts';
import { salesData as data } from '../assets/sales';

const Sales = () => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

    return (
        <div className="bg-white rounded h-[80vh] overflow-y-auto p-4">
        <h3 className="text-xl font-semibold mb-4">Sales Performance</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sales Funnel */}
            <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Sales Funnel</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    dataKey="value"
                    data={[
                        { name: 'New Leads', value: data.salesFunnel.newLeads },
                        { name: 'Contacted', value: data.salesFunnel.contacted },
                        { name: 'Qualified', value: data.salesFunnel.qualified },
                        { name: 'Proposal Sent', value: data.salesFunnel.proposalSent },
                        { name: 'Closed Deals', value: data.salesFunnel.closedDeals },
                    ]}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                    >
                    {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                    ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                </ResponsiveContainer>
            </div>
            </div>

            {/* Revenue Graph */}
            <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Revenue Graph</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.revenueGraph}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
                </ResponsiveContainer>
            </div>
            </div>

            {/* Sales Rep Performance */}
            <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Sales Rep Performance</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.salesRepPerformance}>
                    <XAxis dataKey="repName" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="dealsClosed" fill="#8884d8" />
                    <Bar dataKey="revenueGenerated" fill="#82ca9d" />
                </BarChart>
                </ResponsiveContainer>
            </div>
            </div>
        </div>

        {/* Top Deals Table */}
        <div className="bg-white p-4 rounded shadow mt-4 hidden sm:block">
            <h3 className="text-lg font-semibold mb-4">Top Deals</h3>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deal Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expected Close Date
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.topDeals.map((deal, index) => (
                    <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.customerName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        ${deal.dealValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.expectedCloseDate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default Sales