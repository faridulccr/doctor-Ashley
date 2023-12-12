import { GoDotFill } from "react-icons/go";
import userImage from "../../../assets/images/woman.avif";
import myFace from "../../../assets/images/young-beautiful.avif";

import { useState } from "react";
import Chat from "./Chat";
import ExtraButton from "./ExtraButton";
import "./SuperAdminHome.style.scss";

const SuperAdminHome = () => {
    const [menuName, setMenuName] = useState("chat");

    return (
        <>
            <section className="super-admin-home py-9 px-4">
                <div className="w-[425px]">
                    {/* profile */}
                    <div className="flex items-center justify-center gap-6 mt-10 font-['DM_Sans']">
                        <img
                            className="w-[89px] h-[94px] rounded-full"
                            src={userImage}
                            alt=""
                        />
                        <div>
                            <h3 className=" font-semibold text-[31px] leading-3[37px] text-[#000009]">
                                Olivia Wild
                            </h3>
                            <a
                                className=" font-semibold text-lg text-[#215EBF]"
                                href="#"
                            >
                                Ahl-ih-veeuh WA-ihld
                            </a>
                            <p className="text-[#626264] text-base flex items-start gap-3">
                                Female{" "}
                                <span>
                                    <GoDotFill />
                                </span>{" "}
                                81 y.o.
                            </p>
                        </div>
                    </div>

                    {/* menu */}
                    <ul className="my-7 flex items-center justify-center gap-10 font-['DM_Sans'] text-[#5F5F5F] text-xl border-b">
                        <li
                            onClick={() => setMenuName("record")}
                            className={menuName === "record" && "active"}
                        >
                            Record
                        </li>
                        <li
                            onClick={() => setMenuName("chat")}
                            className={menuName === "chat" && "active"}
                        >
                            Chat
                        </li>
                        <li
                            onClick={() => setMenuName("notes")}
                            className={menuName === "notes" && "active"}
                        >
                            Notes
                        </li>
                        <li
                            onClick={() => setMenuName("docs")}
                            className={menuName === "docs" && "active"}
                        >
                            Docs
                        </li>
                    </ul>

                    <Chat />
                </div>

                <div className="font-['DM_Sans']">
                    <div className="video-container">
                        <img className="video" src={userImage} alt="" />
                        <div className="bg-[#393B48] rounded-[10px] p-3 w-[150px] h-[75px] absolute top-[37px] left-[37px]">
                            <p className="text-base text-[#D2D5DE]">
                                Time remaining
                            </p>
                            <span className=" text-2xl text-white">11:29</span>
                        </div>
                        <div className="my-face">
                            <img src={myFace} alt="" />
                        </div>
                        <div className="controls"></div>
                    </div>

                    <ExtraButton />
                </div>
            </section>
        </>
    );
};

export default SuperAdminHome;
