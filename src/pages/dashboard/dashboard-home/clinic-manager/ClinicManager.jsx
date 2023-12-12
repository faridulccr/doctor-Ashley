import { useState } from "react";
import userImage from "../../../../assets/images/woman.avif";
import SuperAdminProfile from "../../../../components/SuperAdminProfile";
import "./ClinicManager.style.scss";

const ClinicManager = () => {
    const [menuName, setMenuName] = useState("overview");

    return (
        <div className="clinic-manager-home">
            <div className="profile-details p-8">
                <div className="text-center mb-[90px]">
                    <img
                        className="w-[122px] h-[122px] rounded-full inline-block mb-7"
                        src={userImage}
                        alt="user"
                    />
                    <h3 className="text-[32px] text-[#2F3241] leading-[38px] font-[600]">
                        Olivia Wild
                    </h3>
                    <p className="text-[20px] text-[#626264] leading-[24px]">
                        Female
                    </p>
                </div>

                <div className="general-info">
                    <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                        General Info
                    </h3>
                    <table>
                        <tbody className="text-[18px] leading-[22px] text-[#626264]">
                            <tr>
                                <td>Phone</td>
                                <td className="text-[#2A659A]">520-909-0865</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className="text-[#2A659A]">
                                    name.name@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td className="text-[#2A659A]">
                                    Scottsdale AZ
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    Date of Birth{" "}
                                    <span className="text-[#2A659A]">
                                        &nbsp; 00/00/0000
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    Medical Record Number{" "}
                                    <span className="text-[#2A659A]">
                                        &nbsp;247992029AB
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="active-employees mt-[18px]">
                    <h3 className="text-[24px] leading-[29px] font-[600] text-[#000009] mb-6">
                        Referrals
                    </h3>
                    <ul className="text-[18px] leading-[22px] text-[#626264]">
                        <li>OCTOBER 2023 - SPOOKY15</li>
                        <li>FIRST VISIT - WELCOME10</li>
                        <li>Results 3</li>
                    </ul>
                </div>
            </div>

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
                    <div className="to-do">
                        <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3">
                            <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                                To Do
                            </h3>
                        </div>
                    </div>
                    <div className="pulse">
                        <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3">
                            <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                                Pulse
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row-3 mt-5 mr-4">
                    <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                        <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                            Financial Health
                        </h3>
                        <button className="btn bg-[#2A659A] w-fit h-10 text-[#fff] text-[16px] leading-[19px] hover:bg-[#103b61]">
                            Manage Refils
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicManager;
