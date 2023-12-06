import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

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

            <div className="p-3 pt-7">
                <div className="select-group">
                    <div>
                        <select name="" id="">
                            <option value="">Sort by Week</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="">
                            <option value="">Location</option>
                        </select>
                    </div>

                    <div>
                        <select name="" id="">
                            <option value="">Age Group</option>
                        </select>
                    </div>

                    <div>
                        <select name="" id="">
                            <option value="">Medication Type</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="map-wrap">
                <MapContainer
                    center={[40.7128, -74.006]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[40.7128, -74.006]}>
                        {/* <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup> */}
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default GeoAnalytics;
