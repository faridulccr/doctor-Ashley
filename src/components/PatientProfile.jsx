import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import userImage from "../assets/images/woman.avif";

const PatientProfile = () => {
    return (
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
                Owner: Bill Hays
            </p>
            <div className="flex justify-center items-center gap-4 mt-7">
                <a
                    className="w-[60px] h-[58px] rounded-[10px] bg-[#2A9A57] text-white text-[24px] flex justify-center items-center"
                    href="#"
                >
                    <FiPhone />
                </a>
                <a
                    className="w-[60px] h-[58px] rounded-[10px] bg-[#2A659A] text-white text-[24px] flex justify-center items-center"
                    href="#"
                >
                    <HiOutlineMail />
                </a>
            </div>
        </div>
    );
};

export default PatientProfile;
