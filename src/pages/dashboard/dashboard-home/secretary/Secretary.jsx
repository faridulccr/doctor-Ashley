import { useState } from "react";
import SuperAdminProfile from "../../../../components/SuperAdminProfile";
import Billing from "./Billing";
import Profile from "./Profile";
import Pulse from "./Pulse";
import "./Secretary.style.scss";

const Secretary = () => {
    const [menuName, setMenuName] = useState("overview");

    return (
        <div className="secretary-home">
            <Profile />

            <div className="home-content pl-4 pt-5">
                <div className="flex justify-between items-center">
                    {/* menu */}
                    <ul className="flex items-center justify-center gap-10 font-['DM_Sans'] text-[#5F5F5F] text-xl">
                        <li
                            onClick={() => setMenuName("overview")}
                            className={menuName === "overview" && "active"}
                        >
                            Overview
                        </li>
                        <li
                            onClick={() => setMenuName("soaps")}
                            className={menuName === "soaps" && "active"}
                        >
                            SOAPs
                        </li>
                        <li
                            onClick={() => setMenuName("labs")}
                            className={menuName === "labs" && "active"}
                        >
                            Labs
                        </li>
                        <li
                            onClick={() => setMenuName("documents")}
                            className={menuName === "documents" && "active"}
                        >
                            Documents
                        </li>
                    </ul>
                    <SuperAdminProfile />
                </div>
                <hr />

                <div className="row-2 mt-5 mr-4">
                    <Pulse />
                </div>

                <div className="row-3 mt-5 mr-4">
                    <Billing />
                </div>
            </div>
        </div>
    );
};

export default Secretary;
