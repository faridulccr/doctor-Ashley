import { BiMessageRounded } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { FaListAlt, FaUsers } from "react-icons/fa";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { IoBarChartOutline, IoLogOutOutline } from "react-icons/io5";
import logo from "../../assets/images/Logo.png";

import { NavLink, Outlet } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import "./Dashboard.style.scss";

const Dashboard = () => {
    useTitle("Dashboard");

    return (
        <>
            <div className="my-drawer">
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="menu-side">
                    <ul className="dashboard-menu">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to="/">
                                <img
                                    className="w-[86px] h-[70px] -ml-5"
                                    src={logo}
                                    alt=""
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="dashboard-home">
                                <FaListAlt />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="patients">
                                <FaUsers />
                                Patients
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="calender">
                                <BsCalendar3 />
                                Calender
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="message">
                                <BiMessageRounded />
                                Messages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="billings">
                                <HiOutlineClipboardDocument />
                                Billing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="financial">
                                <IoBarChartOutline />
                                Financial
                            </NavLink>
                        </li>
                        <li className="mt-auto">
                            <button className="logout-btn">
                                <IoLogOutOutline className="-rotate-90" />
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
