// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
} from "react-router-dom";
// import "./index.css";
import Main from "../layouts/Main";
import Home from "../Pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router

