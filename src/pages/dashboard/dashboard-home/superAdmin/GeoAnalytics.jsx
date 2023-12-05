import { useState } from "react";

const GeoAnalytics = () => {
    const [btnValue, setBtnValue] = useState("offices");

    return (
        <div className="geo-analytics">
            <div className="bg-[#D8E5F0] rounded-tl-[15px] rounded-tr-[15px] px-5 py-3 flex justify-between items-center">
                <h3 className="text-[28px] leading-[34px] text-[#2F3241]">
                    GeoAnalytics
                </h3>
                <div className="analytics-btn flex gap-8">
                    <button
                        onClick={() => {
                            setBtnValue("offices");
                        }}
                        className={`${
                            btnValue === "offices" && "active"
                        } text-[20px] leading-[24px] text-[#5F5F5F]`}
                    >
                        Offices
                    </button>
                    <button
                        onClick={() => {
                            setBtnValue("patients");
                        }}
                        className={`${
                            btnValue === "patients" && "active"
                        } text-[20px] leading-[24px] text-[#5F5F5F]`}
                    >
                        Patients
                    </button>
                </div>
            </div>

            <div className="p-3"></div>
        </div>
    );
};

export default GeoAnalytics;
