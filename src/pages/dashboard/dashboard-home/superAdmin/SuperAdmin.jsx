import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

import { MdOutlineExpandLess } from "react-icons/md";

import PatientProfile from "../../../../components/PatientProfile";
import SuperAdminProfile from "../../../../components/SuperAdminProfile";
import GeoAnalytics from "./GeoAnalytics";
import PaymentGraph from "./PaymentGraph";
import "./SuperAdmin.style.scss";
import TreatmentGraph from "./TreatmentGraph";

const SuperAdmin = () => {
    return (
        <section className="dashboard-home-container super-admin">
            <div className="profile-details p-8">
                <PatientProfile />

                <div className="general-info">
                    <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                        General Info
                    </h3>
                    <table>
                        <tbody className="text-[18px] leading-[22px] text-[#626264]">
                            <tr>
                                <td>Open Date</td>
                                <td className="text-[#2A659A]">00/00/0000</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td className="text-[#2A659A]">
                                    Scottsdale AZ
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className="text-[#2A659A]">
                                    name.name@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td className="text-[#2A659A]">520-909-0865</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="active-employees mt-[18px]">
                    <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                        Active Employees
                    </h3>
                    <ul className="text-[18px] leading-[22px] text-[#626264]">
                        <li>21 Nurse Practitioners</li>
                        <li>3 Doctors</li>
                        <li>2 Physical Therapists</li>
                    </ul>
                </div>

                <div className="cared-for mt-[18px]">
                    <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                        Patients Being Cared For
                    </h3>
                    <ul className="text-[18px] leading-[22px] text-[#626264]">
                        <li>Elderly</li>
                        <li>Adult Female</li>
                        <li>Adult Male</li>
                        <li>Children</li>
                    </ul>
                </div>

                <a
                    className="text-[18px] leading-[22px] text-[#2A659A] gap-6 flex items-center mt-[54px]"
                    href="#"
                >
                    View Detailed Record <FaArrowRightLong />
                </a>
            </div>

            <div className="home-content pl-4 pt-5">
                <SuperAdminProfile />
                <hr />

                <div className="row-2 pr-10">
                    <div className="pulse overflow-auto">
                        <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3">
                            <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                                Pulse
                            </h3>
                        </div>
                        <div className="py-7 px-5">
                            <p className="text-[22px] leading-[26px] font-[600] text-[#2F3241] flex justify-between items-center">
                                Branch Performance
                                <button className="w-10 h-10 rounded-[10px] bg-[#2A659A] text-white text-[24px] flex justify-center items-center">
                                    <BsThreeDotsVertical />
                                </button>
                            </p>

                            <div className="table overflow-x-auto mt-10">
                                <table className="text-[16px] leading-[20px] text-[#2F3241]">
                                    <thead>
                                        <tr>
                                            <th>
                                                <p>
                                                    Branch
                                                    <span>
                                                        <MdOutlineExpandLess />
                                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                                    </span>
                                                </p>
                                            </th>
                                            <th>
                                                <p>
                                                    Scripts
                                                    <span>
                                                        <MdOutlineExpandLess />
                                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                                    </span>
                                                </p>
                                            </th>
                                            <th>
                                                <p>
                                                    Revenue
                                                    <span>
                                                        <MdOutlineExpandLess />
                                                        <MdOutlineExpandLess className=" rotate-180 -mt-2.5" />
                                                    </span>
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tuscaloosa, AL</td>
                                            <td>82</td>
                                            <td>Rs. 80,000</td>
                                        </tr>
                                        <tr>
                                            <td>Tuscaloosa, AL</td>
                                            <td>32</td>
                                            <td>Rs. 1,20,000</td>
                                        </tr>
                                        <tr>
                                            <td>Tuscaloosa, AL</td>
                                            <td>20</td>
                                            <td>Rs. 60,000</td>
                                        </tr>
                                        <tr>
                                            <td>Tuscaloosa, AL</td>
                                            <td>15</td>
                                            <td>Rs. 340,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <GeoAnalytics />
                </div>

                <div className="pr-10 mt-5">
                    <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                        <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                            Financial Health
                        </h3>
                        <button className="btn bg-[#2A659A] w-[120px] h-10 text-[#fff] text-[16px] leading-[19px] hover:bg-[#103b61]">
                            This Month
                        </button>
                    </div>

                    <div className="graph-section">
                        <TreatmentGraph />
                        <PaymentGraph />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperAdmin;
