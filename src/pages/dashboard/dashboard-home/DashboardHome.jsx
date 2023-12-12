import "./DashboardHome.style.scss";
import ClinicManager from "./clinic-manager/ClinicManager";
import SuperAdmin from "./superAdmin/SuperAdmin";

const DashboardHome = () => {
    const pageName = "super-admin";

    return (
        <>
            {pageName === "super-admin" && <SuperAdmin />}
            {pageName === "clinic-manager" && <ClinicManager />}
        </>
    );
};

export default DashboardHome;
