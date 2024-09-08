import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import { dashboardData } from '../assets/dashboard';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('overall'); // Default to 'Overall'

  const currentData = dashboardData.timeFrames[timeFrame];
  
  // Colors for Pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4 max-[400px]:px-2 sm:p-6 space-y-8 bg-white rounded h-[80vh] overflow-y-auto">
      {/* Time Frame Selector */}
      <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
      <div className="flex max-[400px]:flex-col justify-end space-x-4">
      <select
        value={timeFrame}
        onChange={(e) => setTimeFrame(e.target.value)}
        className="pl-1 pr-2 py-2 rounded text-base bg-blue-500 text-white w-fit outline-none"
      >
        <option value="overall">Overall</option>
        <option value="1Day">1 Day</option>
        <option value="1Week">1 Week</option>
        <option value="1Month">1 Month</option>
      </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Total Customers</h3>
          <p className="text-2xl font-bold">{currentData.summaryCards.totalCustomers}</p>
        </div>
        <div className="bg-blue-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Total Leads</h3>
          <p className="text-2xl font-bold">{currentData.summaryCards.totalLeads}</p>
        </div>
        <div className="bg-red-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Total Sales</h3>
          <p className="text-2xl font-bold">${currentData.summaryCards.totalSales.toLocaleString()}</p>
        </div>
        <div className="bg-yellow-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Open Support Tickets</h3>
          <p className="text-2xl font-bold">{currentData.summaryCards.openSupportTickets}</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-purple-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Conversion Rate</h3>
          <p className="text-2xl font-bold">{currentData.kpis.conversionRate}%</p>
        </div>
        <div className="bg-pink-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Customer Satisfaction Score</h3>
          <p className="text-2xl font-bold">{currentData.kpis.customerSatisfactionScore}</p>
        </div>
        <div className="bg-orange-400 p-4 rounded-lg shadow">
          <h3 className="text-gray-700">Sales</h3>
          <p className="text-2xl font-bold">${currentData.kpis.totalSales.toLocaleString()}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentData.charts.revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(currentData.charts.revenueTrend[0])[0]} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Funnel Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 mb-4">Sales Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={Object.entries(currentData.charts.salesFunnel).map(([stage, count]) => ({ stage, count }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Leads by Source Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-700 mb-4">Leads by Source</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={Object.entries(currentData.charts.leadsBySource).map(([source, count]) => ({ name: source, value: count }))}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {Object.entries(currentData.charts.leadsBySource).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
