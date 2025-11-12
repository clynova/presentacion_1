import { Outlet } from "react-router-dom";
import Navbar from "../ui/nav/Navbar";

const MainLayout = () => {
    return (
        <div
            className="min-h-screen w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors bg-cover bg-center bg-no-repeat flex flex-col"
        >
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
