import { IoShieldHalfOutline } from "react-icons/io5";
import { adminNavbarItems, publicNavbarItems } from "../helpers/navbarHelper";
import { NavbarLink } from "./NavbarLink";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="h-full flex flex-col w-60 bg-white shrink-0 border-r border-slate-100">
      <div className="flex flex-col p-5">
        <h3 className="font-bold text-xl text-slate-800 flex items-center justify-between">Lighthouse <span className="text-xs p-1 px-2 leading-none rounded bg-yellow-500/10 text-yellow-500">Beta</span></h3>
        <span className="text-sm text-slate-500">A luz do Farol! 💡</span>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex-col">
          <h4 className="px-5 py-2 font-bold text-slate-800">Visão Pessoal</h4>
          <div> { publicNavbarItems.map(({href, title}, index) => <NavbarLink href={href} title={title} key={index} />) } </div>
        </div>

        <div className="flex-col gap-2">
          <div className="flex items-center justify-between px-5 py-2">
            <h4 className="font-bold text-slate-800">Visão Admin</h4>
            <div className="p-2 rounded-md bg-red-500/10 text-red-500 flex items-center">
              <IoShieldHalfOutline size={14} />
            </div>
          </div>
          <div> { adminNavbarItems.map(({href, title}, index) => <NavbarLink href={href} title={title} key={index} />) } </div>
        </div>
      </div>
    </nav>
  );
};
