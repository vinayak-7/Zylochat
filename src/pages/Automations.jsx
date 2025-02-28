import React from "react";
import { Link } from "react-router-dom";

const Automations = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#d5def5]/70 pt-16">
      {/* Content Wrapper */}
      <div className="relative z-10 p-6 w-full max-w-7xl mx-auto flex-grow">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#430f58]">Automations</h1>
          <Link to="/automations/new">
            <button className="bg-[#6643b5] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-[#430f58] transition">
              + New Automation
            </button>
          </Link>
        </div>

        {/* Search & Sorting Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 w-full">
          <input
            type="text"
            placeholder="Search automations..."
            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:max-w-sm shadow-sm focus:ring-2 focus:ring-[#6643b5] outline-none"
          />
          <select className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-[#6643b5] w-full sm:w-auto">
            <option>Sorted by Last Published</option>
          </select>
        </div>

        {/* Table for Large Screens */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full min-w-[400px] sm:min-w-full">
            <thead className="bg-[#8594e4] text-white text-sm uppercase tracking-wider">
              <tr>
                <th className="py-3 px-5 text-left">Automation</th>
                <th className="py-3 px-5 text-center">Runs</th>
                <th className="py-3 px-5 text-center">Status</th>
                <th className="py-3 px-5 text-center">Last Published</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-4 px-5 text-[#430f58] font-medium">New Automation</td>
                <td className="text-center py-4 px-5">0</td>
                <td className="text-center py-4 px-5">
                  <span className="bg-[#6643b5] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Draft
                  </span>
                </td>
                <td className="text-center py-4 px-5 text-gray-500">Not Published</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Card Layout for Mobile Screens */}
        <div className="block sm:hidden space-y-4">
          {/* Example Automation Card */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold text-[#430f58]">New Automation</h3>
            <p className="text-gray-700"><strong>Runs:</strong> 0</p>
            <p className="text-gray-700"><strong>Status:</strong> 
              <span className="ml-2 bg-[#6643b5] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Draft
              </span>
            </p>
            <p className="text-gray-500"><strong>Last Published:</strong> Not Published</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Automations;
