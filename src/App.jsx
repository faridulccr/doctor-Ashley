import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const location = useLocation();
    const isDashboard = location.pathname.includes("login");

    return (
        <section>
            {!isDashboard && <Header />}
            <Outlet />
        </section>
    );
}

export default App;
