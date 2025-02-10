import SalesIcon from "../../../public/Chart.png";
import ArrowRight from "../../../public/Button-arrow (1).png";
import DollarIcon from "../../../public/Chart (1).png";
import ProfitIcon from "../../../public/Chart (2).png";
import Graph from "../../../public/Chart-Auto-Layout.png";
import ChartIcon from "../../../public/Chart (3).png";
import HistoryIcon from "../../../public/Chart (4).png";
import MicrosoftLogo from "../../../public/Image.png";
import TeslaLogo from "../../../public/Button-Arrow.png";
const AnalyticsCard = () => {
  return (
    <section className="bg-[#FAFAFA] p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Number of Sales Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <img src={SalesIcon} alt="" />
              <div className="bg-green-100 px-2 py-1 rounded-full text-green-600 text-sm">
                +4.43%
              </div>
            </div>
            <div>
              <img src={ArrowRight} alt="View more" />
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-2">125</h2>
          <button className="text-gray-400">
            <p className="text-gray-500">Number of Sales</p>
          </button>
        </div>

        {/* New Revenue Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <img src={DollarIcon} alt="" />
              <span className="bg-red-100 px-2 py-1 rounded-full text-red-600 text-sm">
                -4.43%
              </span>
            </div>

            <img src={ArrowRight} alt="View more" />
          </div>

          <h2 className="text-3xl font-semibold mb-2">178,125</h2>
          <button className="text-gray-400">
            <p className="text-gray-500">New Revenue</p>
          </button>
        </div>

        {/* Cost Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <img src={DollarIcon} alt="" />
              <span className="bg-green-100 px-2 py-1 rounded-full text-green-600 text-sm">
                +4.43%
              </span>
            </div>
            <img src={ArrowRight} alt="View more" />
          </div>
          <h2 className="text-3xl font-semibold mb-2">$1,930,000</h2>
          <button className="text-gray-400">
            <span className="text-gray-500">Cost</span>
          </button>
        </div>

        {/* Profit by Sale Card */}
        <div className="bg-[#3E79EF] text-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <img src={ProfitIcon} alt="" />
              <span className="bg-white px-2 py-1 rounded-full text-[#3E79EF] text-sm">
                +4.45%
              </span>
            </div>

            <img src={ArrowRight} alt="View more" />
          </div>
          <h2 className="text-3xl font-semibold mb-2">$521,000</h2>
          <button className="text-white">
            <p>Profit by Sale</p>
          </button>
        </div>
      </div>

      {/* Leads Conversion & Deal History Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Leads Conversion Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img src={ChartIcon} alt="" />
              <span className="font-medium">Leads Conversion Rates</span>
            </div>
            <div className="bg-green-100 px-2 py-1 rounded-full text-green-600 text-sm">
              +4.43%
            </div>
          </div>
          <div className="h-64 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#3E79EF] px-3 py-1 rounded text-white text-sm">
              $72,000
            </div>
            <img
              src={Graph}
              alt="Chart"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Deal History */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img src={HistoryIcon} alt="" />
              <span className="font-medium">Deal History</span>
            </div>
            <button>
              <img src={ArrowRight} alt="View more" />
            </button>
          </div>

          {/* Deal Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src={MicrosoftLogo}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">$ 251,000.00-</h3>
                  <p className="text-sm text-gray-500">
                    Purchasing for CRM Products
                  </p>
                  <p className="text-xs text-gray-400">Microsoft, Ltd.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Nov 25,2024</p>
                <button className="text-[#3E79EF] text-sm">Send Mail</button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src={TeslaLogo}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">$ 321,000.00-</h3>
                  <p className="text-sm text-gray-500">
                    Maintaining & Upgrade Saas
                  </p>
                  <p className="text-xs text-gray-400">Tesla, Ltd.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Nov 12,2024</p>
                <button className="text-[#3E79EF] text-sm">Send Mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsCard;
