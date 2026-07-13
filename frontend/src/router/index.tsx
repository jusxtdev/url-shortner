import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Home.tsx"
import NotFound from "../pages/NotFound.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);
