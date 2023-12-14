import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CalenderContainer = () => {
    const [title, setTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [events, setEvents] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const handleSelect = (start, end, allDays) => {
        document.getElementById("modal").showModal();
        setStartTime(start.start);
    };

    const handleClick = () => {
        setEvents((prev) => [...prev, { title: title, start: startTime }]);
        document.getElementById("close")?.click();
    };

    return (
        <div className="calender-container mt-5">
            <dialog id="modal" className="modal">
                <div className="modal-box relative">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-[370px]"
                    />
                    <button
                        onClick={handleClick}
                        className="btn btn-outline btn-accent ml-4"
                    >
                        Save
                    </button>
                    <div className="modal-action absolute -top-5 right-1">
                        <form method="dialog">
                            <button
                                className="text-red-600 text-[24px]"
                                id="close"
                            >
                                <RxCross2 />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

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
                        start: "dayGridMonth timeGridWeek timeGridDay",
                        center: "title",
                        end: "prev today next",
                    }}
                    //   weekends={false}
                    events={events}
                    selectable
                    //   eventContent={renderEventContent}
                    select={handleSelect}
                />
            </div>
        </div>
    );
};

export default CalenderContainer;

{
    /* <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
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
            </div> */
}
