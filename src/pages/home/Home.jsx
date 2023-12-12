import { IoIosArrowBack } from "react-icons/io";
import SuperAdminHome from "./super-admin-home/SuperAdminHome";

const Home = () => {
    return (
        <>
            <button className=" text-3xl absolute top-[37px] left-[37px]">
                <IoIosArrowBack />
            </button>
            <SuperAdminHome />
        </>
    );
};

export default Home;
