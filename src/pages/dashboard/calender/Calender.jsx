import { IoIosArrowForward } from "react-icons/io";
import SuperAdminProfile from "../../../components/SuperAdminProfile";
import "./Calender.style.scss";
import CalenderContainer from "./CalenderContainer";

const arr = [1, 2, 3, 4, 5];

const Calender = () => {
    return (
        <div className="calender">
            <div className="profile-details py-14 px-5 font-['DM_Sans']">
                <h3 className="text-[#2F3241] text-[32px] leading-[28px]">
                    Upcoming
                </h3>

                <dir className="mt-10">
                    {arr.map((v, i) => (
                        <div
                            key={i}
                            className="text-xl leading-6 font-['DM_Sans'] text-[#2F3241] bg-[#E9ECFD] rounded-[15px] p-4 pr-6 mb-5"
                        >
                            <p className="flex items-center gap-4 text-[20px]">
                                Oct 25th 12:15pm
                            </p>
                            <p className="text-[16px]">
                                Follow up visit with Carrie S. VIRTUAL Dr. Anne
                                Richardson
                            </p>
                            <a
                                className="underline inline-block mt-3 text-[17px]"
                                href="#"
                            >
                                See Record
                            </a>
                            <p className="flex items-center justify-between text-[16px]">
                                Starts at 12:00 PM CST
                                <IoIosArrowForward className="text-[22px]" />
                            </p>
                        </div>
                    ))}
                </dir>
            </div>
            <div className="content p-5">
                <SuperAdminProfile />
                <hr />
                <CalenderContainer />
            </div>
        </div>
    );
};

export default Calender;
