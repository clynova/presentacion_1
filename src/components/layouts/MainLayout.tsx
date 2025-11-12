import { Outlet } from "react-router-dom";
import Navbar from "../ui/nav/Navbar";

const MainLayout = () => {
    return (
        <div
            className="min-h-screen w-full text-white transition-colors bg-cover bg-center bg-no-repeat flex flex-col"
        >
            <Navbar />
            <main className="p-4 sm:p-6 lg:p-8 flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
