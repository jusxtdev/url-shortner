import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <footer>snip — short links, simply.</footer>
        </>
    );
}
