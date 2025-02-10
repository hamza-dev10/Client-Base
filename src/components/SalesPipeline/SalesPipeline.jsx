import FunnelIcon from "../../../public/funnel-icon.png";
import DealsIcon from "../../../public/deals-icon.png";
import ActiveDealsChart from "../../../public/active-deals-chart.png";
import PieChartIcon from "../../../public/pie-chart-icon.png";
import PieChart from "../../../public/pie-chart.png";
import ArrowRight from "../../../public/Button-Arrow (1).png";

const SalesPipeline = () => {
  return (
    <div className="space-y-6 p-6 bg-[#FAFAFA]">
      {/* Sales Funnel Chart Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <img src={FunnelIcon} alt="" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="mb-6">
            <h1 className="text-4xl font-medium">Sales </h1>
            <h3 className="text-3xl">Funneal Chart</h3>
          </div>
          {/* Prospecting - 95% */}
          <div className="space-y-2">
            <div className="bg-gray-100 h-8 rounded relative">
              <div
                className="bg-[#3E79EF] h-full rounded flex items-center justify-between px-3 text-white absolute top-0 left-0"
                style={{ width: "95%" }}
              >
                <span>95%</span>
                <img src="/arrow-right-white.png" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">$35,000</span>
              <span className="text-green-500 text-sm">↑ 4.43%</span>
            </div>
            <p className="text-gray-500 text-sm">Prospecting</p>
          </div>

          {/* Meeting or Demo - 76% */}
          <div className="space-y-2">
            <div className="bg-gray-100 h-8 rounded relative">
              <div
                className="bg-[#7BA3F7] h-full rounded flex items-center justify-between px-3 text-white absolute top-0 left-0"
                style={{ width: "76%" }}
              >
                <span>76%</span>
                <img src="/arrow-right-white.png" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">$26,000</span>
              <span className="text-red-500 text-sm">↓ 4.43%</span>
            </div>
            <p className="text-gray-500 text-sm">Meeting or Demo</p>
          </div>

          {/* Closing - 96% */}
          <div className="space-y-2">
            <div className="bg-gray-100 h-8 rounded relative">
              <div
                className="bg-[#3E79EF] h-full rounded flex items-center justify-between px-3 text-white absolute top-0 left-0"
                style={{ width: "96%" }}
              >
                <span>96%</span>
                <img src="/arrow-right-white.png" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">$22,000</span>
              <span className="text-green-500 text-sm">↑ 4.43%</span>
            </div>
            <p className="text-gray-500 text-sm">Closing</p>
          </div>

          {/* Maintaining - 41% */}
          <div className="space-y-2">
            <div className="bg-gray-100 h-8 rounded relative">
              <div
                className="bg-[#14183E] h-full rounded flex items-center justify-between px-3 text-white absolute top-0 left-0"
                style={{ width: "41%" }}
              >
                <span>41%</span>
                <img src="/arrow-right-white.png" alt="" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">$22,000</span>
              <span className="text-green-500 text-sm">↑ 4.43%</span>
            </div>
            <p className="text-gray-500 text-sm">Maintaining</p>
          </div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Deals */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <img src={DealsIcon} alt="" />
              <span className="font-medium">Active Deals</span>
            </div>
            <div className="bg-green-100 px-2 py-1 rounded-full text-green-600 text-sm">
              +4.43%
            </div>
          </div>
          <div className="mb-2 flex flex-col">
            <span className="text-2xl font-semibold">$40,000</span>
            <span className="text-gray-500 text-sm ml-2">$10,000</span>
          </div>
          <div className="h-24">
            <img
              src={ActiveDealsChart}
              alt="Active Deals Chart"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Actual Revenue */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <img src={DealsIcon} alt="" />
              <span className="font-medium">Actual Revenue</span>
            </div>
            <div className="bg-red-100 px-2 py-1 rounded-full text-red-600 text-sm">
              -4.43%
            </div>
          </div>
          <div className="mb-2 flex flex-col">
            <span className="text-2xl font-semibold">$18,020</span>
            <span className="text-gray-500 text-sm ml-2">$11,000</span>
          </div>
          <div className="h-24">
            <img
              src={ActiveDealsChart}
              alt="Revenue Chart"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Incremental Sales */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <img src={PieChartIcon} alt="" />
              <span className="font-medium">Incremental Sales</span>
            </div>
            <button>
              <img src={ArrowRight} alt="View more" />
            </button>
          </div>
          <div className=" flex items-center gap-4 h-48">
            <img
              src={PieChart}
              alt="Sales Distribution"
              className="w-1/2 h-full object-contain"
            />
            <div className="">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#3E79EF]"></span>
                <span className="text-sm">Facebook Ads</span>
                <span className="text-sm text-gray-500">44%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#7BA3F7]"></span>
                <span className="text-sm">Direct Selling</span>
                <span className="text-sm text-gray-500">28%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#B4CCF9]"></span>
                <span className="text-sm">Affiliate Partner</span>
                <span className="text-sm text-gray-500">18%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E5EDFD]"></span>
                <span className="text-sm">Brand Ambassador</span>
                <span className="text-sm text-gray-500">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPipeline;
