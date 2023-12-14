// import { useState } from "react";
// import { IoMenuOutline } from "react-icons/io5";
// import { RiSearch2Line } from "react-icons/ri";
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const CalenderContainer = () => {
    //  const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <div className="calender-container mt-5">
            {/* <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <button className="text-[28px] text-[#2A659A]">
                        <IoMenuOutline />
                    </button>
                    <div className="w-[100px] h-[35px] px-4 pt-1 rounded-[6px] border-[2px] border-[#2A659A]">
                        <select
                            className="bg-[#D8E5F0] outline-0 text-[#2A659A]"
                            name=""
                            id=""
                        >
                            <option value="">Week</option>
                            <option value="">Month</option>
                            <option value="">Year</option>
                        </select>
                    </div>
                    <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                        January 2024
                    </h3>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                        {showSearchBar && (
                            <input
                                className="rounded-[6px] h-[35px] outline-0 px-3 border border-[#2A659A]"
                                type="text"
                            />
                        )}

                        <button
                            onClick={() => setShowSearchBar(!showSearchBar)}
                            className="text-[28px] text-[#2A659A]"
                        >
                            <RiSearch2Line />
                        </button>
                    </div>

                    <button className="btn bg-[#2A659A] w-fit h-10 text-[#fff] text-[16px] leading-[19px] hover:bg-[#103b61]">
                        Schedule
                    </button>
                </div>
            </div> */}

            <div className=" bg-white p-3">
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        start: "today prev next",
                        center: "title",
                        end: "dayGridMonth timeGridWeek timeGridDay",
                    }}
                    //   weekends={false}
                    // events={events}
                    // eventContent={renderEventContent}
                />
            </div>
        </div>
    );
};

export default CalenderContainer;
