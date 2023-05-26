import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Profile } from "./routes/Profile";
import { Apply } from "./routes/Apply";
import { Jobs } from "./routes/Jobs";
import { JobsDetails } from "./routes/JobsDetails";
import { StaffClass } from "./routes/StaffClass";
import { ApplicantDetails } from "./routes/ApplicantDetails";
import { StaffProfile } from "./routes/StaffProfile";
import { CreateClass } from "./routes/CreateClass";
import { MyApplication } from "./routes/MyApplication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/apply/:id?",
        element: <Apply />,
    },
    {
        path: "/jobs",
        element: <Jobs />,
    },
    {
        path: "/jobs/:id",
        element: <JobsDetails />,
    },
    {
        path: "/class",
        element: <StaffClass />,
    },
    {
        path: "/class/:id",
        element: <ApplicantDetails />,
    },
    {
        path: "/staffProfile",
        element: <StaffProfile />,
    },
    {
        path: "/create-class",
        element: <CreateClass />,
    },
    {
        path: "/my-applications",
        element: <MyApplication />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
