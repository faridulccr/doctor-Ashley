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

            <div className="bg-white rounded-tl-[15px] rounded-tr-[15px]">
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
