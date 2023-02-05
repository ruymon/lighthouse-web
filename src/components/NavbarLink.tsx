import { useCurrentLocation } from "../hooks/useCurrentLocation";

interface NavbarLinkProps {
  href: string;
  title: string;
}

export function NavbarLink({ href, title }: NavbarLinkProps) {
  const currentLocation = useCurrentLocation();
  const isActive = href === currentLocation;

  return (
    <a href={href} className={isActive ? `flex items-center px-5 py-2 text-sm bg-teal-400/5 text-teal-500 font-medium cursor-default` : `flex items-center px-5 py-2 text-sm text-slate-500 hover:text-teal-500 font-medium transition-all`}>
      <span>{title}</span>
    </a>
  )
}