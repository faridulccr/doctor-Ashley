import userImage from "../assets/images/woman.avif";

const SuperAdminProfile = () => {
    return (
        <div className="mb-[14px] w-fit ml-auto flex items-center gap-4 pr-7">
            <img
                className="w-[50px] h-[50px] rounded-[9px]"
                src={userImage}
                alt="user"
            />
            <div>
                <h3 className="text-[18px] leading-[22px] text-[#000]">
                    Dr. Ashley
                </h3>
                <p className="text-[14px] leading-[17px] text-[#A4A4A4]">
                    Super Admin
                </p>
            </div>
        </div>
    );
};

export default SuperAdminProfile;
