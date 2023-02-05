import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function AppLayout() {
  return (
    <main className="w-screen h-screen flex justify-between">
      <Navbar />

      <div className="w-full h-full flex grow items-start">
        <Outlet />
      </div>
    </main>
  );
}