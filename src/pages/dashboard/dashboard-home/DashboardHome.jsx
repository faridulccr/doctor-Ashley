import "./DashboardHome.style.scss";
import SuperAdmin from "./superAdmin/SuperAdmin";

const DashboardHome = () => {
    // const pageName = "super-admin";

    return (
        <>
            {/* {pageName === "super-admin" && <SuperAdmin />} */}
            {/* {pageName === "clinic-manager" && <ClinicManager />} */}
            <SuperAdmin />
        </>
    );
};

export default DashboardHome;
