import { useState } from "react";
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
import SalesPipeline from "../../components/SalesPipeline/SalesPipeline";
import TaskOverview from "../../components/TaskOverview/TaskOverview";
import DropDownArrow from "../../../public/dropdown-arrow.png";
import DownloadIcon from "../../../public/download-icon.png";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <div className="p-6 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 mb-16">
        <div>
          <h1 className="text-5xl font-medium text-[#14183E]">
            Good Morning, Claraa!
          </h1>
          <p className="text-gray-500 mt-1">
            Let's see your current sales work today
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Date Periods:</span>
            <button className="px-4 py-4 bg-gray-50 rounded-3xl flex items-center gap-2">
              1-24 September 2024
              <img src={DropDownArrow} alt="Select date" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-gray-500">Export Data:</span>
            <button className="px-4 py-4 bg-gray-50 rounded-3xl flex items-center gap-2">
              Export Data
              <img src={DownloadIcon} alt="Export" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8">
        <button
          onClick={() => setActiveTab("analytics")}
          className={`pb-4 px-4 ${
            activeTab === "analytics"
              ? "bg-[#FAFAFA] p-4 rounded-t-xl text-[#14183E] font-medium"
              : "text-gray-500"
          }`}
        >
          Analytics Card
        </button>
        <button
          onClick={() => setActiveTab("sales")}
          className={`pb-4 px-4 ${
            activeTab === "sales"
              ? "bg-[#FAFAFA] p-4 rounded-t-xl text-[#14183E] font-medium"
              : "text-gray-500"
          }`}
        >
          Sales Pipeline
        </button>
        <button
          onClick={() => setActiveTab("task")}
          className={`pb-4 px-4 ${
            activeTab === "task"
              ? "bg-[#FAFAFA] p-4 rounded-t-xl text-[#14183E] font-medium"
              : "text-gray-500"
          }`}
        >
          Task Overview
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "analytics" && <AnalyticsCard />}
      {activeTab === "sales" && <SalesPipeline />}
      {activeTab === "task" && <TaskOverview />}
    </div>
  );
};

export default Overview;
