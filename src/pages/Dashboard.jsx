import React from "react";
import { Parallax } from "react-scroll-parallax";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#d5def5] flex justify-center items-start pt-16">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <Parallax speed={5}>
          <div className="flex justify-between items-center mb-6 mt-6">
            <h1 className="text-2xl font-semibold text-[#430f58]">ZyloChat Dashboard</h1>
            <button className="bg-[#6643b5] text-white px-4 py-2 rounded-lg hover:bg-[#430f58] transition">
              Watch Demo
            </button>
          </div>
        </Parallax>

        {/* Connection & Automations */}
        <Parallax speed={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#8594e4] text-white border rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Instagram Connection</h2>
              <button className="bg-green-500 text-white px-5 py-2 rounded-lg">
                ✅ Connected
              </button>
            </div>

            <div className="p-6 bg-[#6643b5] text-white border rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Create Your First Automation</h2>
              <button className="bg-[#430f58] text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
                + New Automation
              </button>
            </div>
          </div>
        </Parallax>

        {/* Conversion Data */}
        <Parallax speed={-5}>
          <div className="mt-6 p-6 bg-[#fff] border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#430f58] mb-4">📊 Conversion Funnel</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b py-2">
                <span className="text-gray-700">Messages Sent:</span>
                <span className="font-semibold text-[#430f58]">120</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span className="text-gray-700">Seen:</span>
                <span className="font-semibold text-[#8594e4]">85</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-700">Clicked:</span>
                <span className="font-semibold text-[#6643b5]">40</span>
              </li>
            </ul>
          </div>
        </Parallax>

        {/* Engagement Data */}
        <Parallax speed={-3}>
          <div className="mt-6 p-6 bg-[#fff] border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#430f58] mb-4">📈 Engagement Trends</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b py-2">
                <span className="text-gray-700">Monday:</span>
                <span className="font-semibold text-[#430f58]">50</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span className="text-gray-700">Tuesday:</span>
                <span className="font-semibold text-[#8594e4]">80</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span className="text-gray-700">Wednesday:</span>
                <span className="font-semibold text-[#6643b5]">120</span>
              </li>
              <li className="flex justify-between border-b py-2">
                <span className="text-gray-700">Thursday:</span>
                <span className="font-semibold text-[#430f58]">70</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-700">Friday:</span>
                <span className="font-semibold text-[#8594e4]">90</span>
              </li>
            </ul>
          </div>
        </Parallax>

        {/* Pricing & Billing */}
        <Parallax speed={3}>
          <div className="mt-6 p-6 bg-[#430f58] text-white border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">💳 Plans & Billing</h2>
            <p className="text-lg font-medium">Current Plan: <span className="text-[#d5def5]">Pro Plan</span></p>
            <p className="text-gray-300">Valid: Feb 2025 - June 2025</p>

            <button className="mt-4 px-5 py-2 bg-[#6643b5] rounded-lg hover:bg-[#5733a5] transition">
              Upgrade Plan 🔼
            </button>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Dashboard;
