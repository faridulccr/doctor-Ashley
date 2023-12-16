import { IoIosArrowBack } from "react-icons/io";
import SuperAdminHome from "./super-admin-home/SuperAdminHome";

const Home = () => {
    return (
        <div className="relative w-fit mx-auto">
            <button className=" text-3xl absolute top-[40px] left-[37px]">
                <IoIosArrowBack />
            </button>
            <SuperAdminHome />
        </div>
    );
};

export default Home;
