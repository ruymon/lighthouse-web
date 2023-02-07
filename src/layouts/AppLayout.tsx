import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function AppLayout() {
  return (
    <main className="w-screen h-screen max-h-screen flex justify-between">
      <Navbar />
      <div className="w-full h-full overflow-y-auto flex grow items-start bg-white">
        <Outlet />
      </div>
    </main>
  );
}