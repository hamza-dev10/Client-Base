import HistogramIcon from "../../../public/histogram-icon.png";
import CalendarIcon from "../../../public/calendar-icon.png";
import ZoomIcon from "../../../public/zoom.png";
import MeetingIcon from "../../../public/meeting.png";
import ClockIcon from "../../../public/time-icon.png";
import TaskChart from "../../../public/Task-chart.png";

const TaskOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#FAFAFA]">
      {/* Left Column */}
      <div className="flex flex-col gap-4 lg:w-[60%]">
        {/* Top Stats Section */}
        <div className="mb-8 bg-white p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <img src={HistogramIcon} alt="" />
            <span className="font-medium">Upcoming Schedule</span>
          </div>

          <div className="flex items-start gap-8 flex-col md:flex-row">
            <div className="flex gap-4 items-center">
              <div className="text-6xl font-semibold mb-1">64%</div>
              <p className="text-gray-500 text-sm">Total Activity</p>
            </div>

            <div className="flex-1 w-full mt-2 md:mt-4">
              <div className="flex w-full h-8 rounded-full overflow-hidden bg-gray-100">
                {/* Done - 24% */}
                <div
                  className="bg-[#4ADE80] h-full flex items-center justify-center relative"
                  style={{ width: "24%" }}
                >
                  <span className="text-white text-xs">24%</span>
                </div>

                {/* Progress - 35% */}
                <div
                  className="bg-[#3E79EF] h-full flex items-center justify-center relative"
                  style={{ width: "35%" }}
                >
                  <span className="text-white text-xs">35%</span>
                </div>

                {/* Upcoming - 41% */}
                <div
                  className="bg-gray-200 h-full flex items-center justify-center relative"
                  style={{ width: "41%" }}
                >
                  <span className="text-gray-600 text-xs">41%</span>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-gray-500 text-sm">Done</p>
                  <p className="font-medium">8 Task</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Progress</p>
                  <p className="font-medium">12 Task</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Upcoming</p>
                  <p className="font-medium">18 Task</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule List Section */}
        <div className="bg-white p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="" />
              <span className="font-medium">Upcoming Schedule</span>
            </div>
            <select className="px-3 py-1.5 rounded-lg text-sm border border-[#EFEFEF]">
              <option>January 2024</option>
            </select>
          </div>

          <div className="space-y-4">
            {/* Done Task */}
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-full bg-[#4ADE80] text-white text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Done
                </button>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Sat 12, Jan</p>
                <p className="font-medium">10:30 AM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Sales Strategy Meeting</p>
                <p className="text-sm text-gray-500">
                  Samuel Weiner and 20+ more
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Note:</p>
                <p className="text-sm text-gray-500">Online Meeting</p>
              </div>
              <div className="text-right">
                <div className="flex gap-2 mt-1 justify-end">
                  <img src={ZoomIcon} alt="" />
                  <img src={MeetingIcon} alt="" />
                </div>
              </div>
            </div>

            {/* Progress Task */}
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-full bg-[#3E79EF] text-white text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Progress
                </button>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Wed 12, Jan</p>
                <p className="font-medium">08:30 AM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Daily Meeting Office</p>
                <p className="text-sm text-gray-500">
                  Robert Khalewai and 20+ more
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Note:</p>
                <p className="text-sm text-gray-500">Send email before..</p>
              </div>
              <div className="text-right">
                <div className="flex gap-2 mt-1 justify-end">
                  <img src={ZoomIcon} alt="" />
                  <img src={MeetingIcon} alt="" />
                </div>
              </div>
            </div>

            {/* Upcoming Task */}
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                  Upcoming
                </button>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Mon 16, Jan</p>
                <p className="font-medium">09:12 PM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Closing Deal Microsoft</p>
                <p className="text-sm text-gray-500">
                  Samuel Weiner and 20+ more
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Note:</p>
                <p className="text-sm text-gray-500">Bring Attachment..</p>
              </div>
              <div className="text-right">
                <div className="flex gap-2 mt-1 justify-end">
                  <img src={ZoomIcon} alt="" />
                  <img src={MeetingIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Activity Time */}
      <div className="bg-white rounded-xl p-6 shadow-sm lg:w-[40%]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src={ClockIcon} alt="" />
            <div className="flex flex-col">
              <span className="font-medium">Activity Time</span>
              <span className="text-4xl font-semibold">
                56.8
                <span className="text-base font-thin"> Total Hours</span>
              </span>
            </div>
          </div>
          <select className="bg-gray-50 px-3 py-1.5 rounded-lg text-sm border-0">
            <option>Last 7 Days</option>
          </select>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#3E79EF] ml-auto">9h 21m</span>
          </div>
        </div>
        <div>
          <img src={TaskChart} alt="" />
        </div>

        <div className="grid md:grid-cols-4 gap-4 bg-[#FAFAFA] p-6 rounded-xl">
          {[
            { hours: "16.21", label: "Prospecting" },
            { hours: "12.8", label: "Meeting" },
            { hours: "9.30", label: "Advertising" },
            { hours: "9.30", label: "Closing" },
          ].map((item, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span className="text-2xl font-semibold">{item.hours}</span>
                <span className="text-sm text-gray-500">hours</span>
              </div>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
