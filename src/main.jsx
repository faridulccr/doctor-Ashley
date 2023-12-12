import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.scss";

// pages
import Billings from "./pages/dashboard/billings/Billings";
import Calender from "./pages/dashboard/calender/Calender";
import Dashboard from "./pages/dashboard/Dashboard";
import ClinicManager from "./pages/dashboard/dashboard-home/clinic-manager/ClinicManager";
import DashboardHome from "./pages/dashboard/dashboard-home/DashboardHome";
import Financial from "./pages/dashboard/financial/Financial";
import Message from "./pages/dashboard/message/Message";
import Patients from "./pages/dashboard/patients/Patients";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <DashboardHome />,
            },
            {
                path: "dashboard-home",
                element: <DashboardHome />,
            },
            {
                path: "clinic-manager",
                element: <ClinicManager />,
            },
            {
                path: "patients",
                element: <Patients />,
            },
            {
                path: "calender",
                element: <Calender />,
            },
            {
                path: "message",
                element: <Message />,
            },
            {
                path: "billings",
                element: <Billings />,
            },
            {
                path: "financial",
                element: <Financial />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
