import { CiVideoOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const ToDo = () => {
    return (
        <div>
            <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3">
                <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                    To Do
                </h3>
            </div>
            <div className="bg-white p-5 rounded-bl-[15px] rounded-br-[15px]">
                <div className="text-xl leading-6 font-['DM_Sans'] text-[#2F3241] bg-[#E9ECFD] rounded-[15px] p-4 pr-6">
                    <p className="flex items-center gap-4">
                        Oct 25th 12:15pm <CiVideoOn className="text-[28px]" />
                    </p>
                    <p>
                        Follow up visit with Carrie S. VIRTUAL Dr. Anne
                        Richardson
                    </p>
                    <a className="underline inline-block mt-3" href="#">
                        See Record
                    </a>
                    <p className="flex items-center justify-between">
                        Starts at 12:00 PM CST{" "}
                        <IoIosArrowForward className="text-[26px]" />
                    </p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-bl-[15px] rounded-br-[15px]">
                <div className="text-xl leading-6 font-['DM_Sans'] text-[#2F3241] bg-[#E9ECFD] rounded-[15px] p-4 pr-6">
                    <p>Oct 25th 12:15pm</p>
                    <p>
                        Follow up visit with Carrie S. VIRTUAL Dr. Anne
                        Richardson
                    </p>
                    <a className="underline inline-block mt-3" href="#">
                        See Record
                    </a>
                    <p>Starts at 12:00 PM CST</p>
                    <div className="mt-5 text-base">
                        <button className="h-10 bg-[#2A9A57] rounded-lg px-4 text-white">
                            Approve
                        </button>
                        <button className="h-10 bg-[#D2474A] rounded-lg px-4 text-white ml-2">
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;