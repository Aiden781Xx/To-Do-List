import React from 'react';
import { BarChart, Users, Package, DollarSign } from 'lucide-react';
import { Analytics } from '../types';

const analytics: Analytics = {
  totalSales: 158947,
  topProducts: [],
  monthlyRevenue: [12000, 15000, 18000, 22000, 19000, 25000]
};

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Sales</p>
              <p className="text-2xl font-bold">${analytics.totalSales.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>
        {/* Add more stat cards */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          {/* Add chart component here */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          {/* Add top products list */}
        </div>
      </div>
    </div>
  );
}