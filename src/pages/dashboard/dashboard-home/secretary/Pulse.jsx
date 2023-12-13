import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiArrowGoForwardFill } from "react-icons/ri";

const Pulse = () => {
    return (
        <div>
            <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                    Pulse
                </h3>
                <button className="btn bg-[#2A659A] w-fit h-10 text-[#fff] text-[16px] leading-[19px] hover:bg-[#103b61]">
                    Upload Documents
                </button>
            </div>

            <div className="bg-white rounded-bl-[15px] rounded-br-[15px] p-5 text-lg  text-[#2F3241] font-['DM_Sans'] grid grid-cols-2 gap-5">
                <div>
                    <p className="text-[22px] mb-3">Patience Attendance</p>

                    <div className="flex items-center gap-5">
                        <p>Scottsdale, AZ #21322</p>
                        <div className="w-[190px] bg-[#EEF1F4] rounded-[25px] px-5 py-2">
                            <select
                                className="w-full bg-[#EEF1F4] outline-0"
                                name=""
                                id=""
                            >
                                <option value="">Sort by Week</option>
                                <option value="">Sort by Month</option>
                                <option value="">Sort by Year</option>
                            </select>
                        </div>

                        <div className="w-[150px] bg-[#EEF1F4] rounded-[25px] px-5 py-2">
                            <select
                                className="w-full bg-[#EEF1F4] outline-0"
                                name=""
                                id=""
                            >
                                <option value="">Activity</option>
                                <option value="">Activity</option>
                                <option value="">Activity</option>
                            </select>
                        </div>
                    </div>

                    <div>{/* TODO Graph */}</div>
                </div>

                <div className="pr-5">
                    <p className="text-[22px] mb-3">New Patient Paperwork</p>
                    <p className="flex items-center justify-between">
                        Mandatory Documents
                        <a className="text-[#2A659A]" href="#">
                            See All
                        </a>
                    </p>

                    <div className="documents mt-4">
                        <ul>
                            <li>
                                <div className="doc-img">
                                    <span className="doc">
                                        <IoDocumentTextOutline />
                                    </span>
                                    <p>
                                        <span>Acknowledgement of Receipt</span>
                                        ...
                                    </p>
                                </div>
                                <span className="size text-[#878787]">
                                    34MB
                                </span>
                                <div className="hover-effect">
                                    <button className="bg-[#D8E5F0]">
                                        <FaRegEnvelopeOpen />
                                    </button>
                                    <button className="bg-[#2A659A] text-white">
                                        <RiArrowGoForwardFill />
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="doc-img">
                                    <span className="doc">
                                        <IoDocumentTextOutline />
                                    </span>
                                    <p>
                                        <span>Acknowledgement of Receipt</span>
                                        ...
                                    </p>
                                </div>
                                <span className="size text-[#878787]">
                                    34MB
                                </span>
                                <div className="hover-effect">
                                    <button className="bg-[#D8E5F0]">
                                        <FaRegEnvelopeOpen />
                                    </button>
                                    <button className="bg-[#2A659A] text-white">
                                        <RiArrowGoForwardFill />
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div className="doc-img">
                                    <span className="doc">
                                        <IoDocumentTextOutline />
                                    </span>
                                    <p>
                                        <span>Acknowledgement of Receipt</span>
                                        ...
                                    </p>
                                </div>
                                <span className="size text-[#878787]">
                                    34MB
                                </span>
                                <div className="hover-effect">
                                    <button className="bg-[#D8E5F0]">
                                        <FaRegEnvelopeOpen />
                                    </button>
                                    <button className="bg-[#2A659A] text-white">
                                        <RiArrowGoForwardFill />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pulse;
