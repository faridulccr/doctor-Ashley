import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import human_body from "../../../../assets/images/Body_Icon.svg";

const Pulse = () => {
    const [menuName, setMenuName] = useState("pulmonology");

    return (
        <div className="pulse">
            <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3">
                <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                    Pulse
                </h3>
            </div>
            <div className="content bg-white p-5 rounded-bl-[15px] rounded-br-[15px] flex items-start">
                <div className="pr-5 w-[200px]">
                    <h3>SOAP Note Eval</h3>
                    <ul>
                        <li>
                            Opened <span>7</span>
                        </li>
                        <li>
                            Completed <span>2</span>
                        </li>
                    </ul>
                    <h3>Labs</h3>
                    <ul>
                        <li>
                            MisMatched <span>2</span>
                        </li>
                        <li>
                            MisMatched <span>2</span>
                        </li>
                        <li>
                            Completed <span>7</span>
                        </li>
                    </ul>
                </div>

                <div className="font-['DM_Sans'] text-[#2F3241] px-5">
                    <h4 className="text-[15px] font-semibold flex items-center justify-between mb-2">
                        Body info{" "}
                        <button>
                            <HiDotsVertical className="text-xl" />
                        </button>
                    </h4>

                    <div className="menu-container">
                        <ul>
                            <li
                                onClick={() => setMenuName("pulmonology")}
                                className={
                                    menuName === "pulmonology" && "active"
                                }
                            >
                                Pulmonology
                            </li>
                            <li
                                onClick={() => setMenuName("skeletal")}
                                className={menuName === "skeletal" && "active"}
                            >
                                Skeletal system
                            </li>
                            <li
                                onClick={() => setMenuName("muscle")}
                                className={menuName === "muscle" && "active"}
                            >
                                Muscle system
                            </li>
                            <li
                                onClick={() => setMenuName("nervous")}
                                className={menuName === "nervous" && "active"}
                            >
                                Nervous
                            </li>
                        </ul>
                    </div>
                    <div className="human-body-container">
                        <img src={human_body} alt="" />
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="big-dot">
                            <div className="inner-dot"></div>
                        </div>
                        <div className="small-dot"></div>
                        <div className="arrow">
                            <MdKeyboardArrowLeft />
                            <MdKeyboardArrowRight />
                        </div>

                        <div className="human-body-content leading-[1px]">
                            <p className="text-sm font-semibold">
                                Oxygen level
                            </p>
                            <span className="text-sm text-[grey]">+1.2%</span>
                            <span className="text-sm text-[grey] block mt-2">
                                SpO2
                            </span>
                            <div className="flex">
                                <span className="font-bold text-xl">98%</span>
                                {/* <img src={flower} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Pulse;
