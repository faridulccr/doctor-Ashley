import { FaChalkboard } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import { MdScreenshotMonitor } from "react-icons/md";

const ExtraButton = () => {
    return (
        <div className="extra-btn flex items-center justify-center gap-14">
            <div className="btn-container">
                <button className="icon">
                    <FaRegCircleDot />
                </button>
                <span>Record</span>
            </div>
            <div className="btn-container">
                <button className="icon">
                    <MdScreenshotMonitor />
                </button>
                <span>Share screen</span>
            </div>
            <div className="btn-container">
                <button className="icon">CC</button>
                <span>Subtitles</span>
            </div>
            <div className="btn-container">
                <button className="icon">
                    <FaChalkboard />
                </button>
                <span>White board</span>
            </div>
            <div className="btn-container">
                <button className="icon">
                    <IoDocumentOutline />
                </button>
                <span>Meeting plan</span>
            </div>
            <div className="btn-container">
                <button className="icon">
                    <LuBookOpen />
                </button>
                <span>Care Plan</span>
            </div>
        </div>
    );
};

export default ExtraButton;
