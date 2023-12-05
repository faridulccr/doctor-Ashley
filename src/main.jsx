import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import "./index.scss";

// pages
import Calender from "./pages/dashboard/calender/Calender";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/dashboard-home/DashboardHome";
import Patients from "./pages/dashboard/patients/Patients";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
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
                path: "patients",
                element: <Patients />,
            },
            {
                path: "calender",
                element: <Calender />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
