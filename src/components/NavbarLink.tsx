interface NavbarLinkProps {
  href: string;
  title: string;
  isActive?: boolean;
}

export function NavbarLink({ href, title, isActive }: NavbarLinkProps) {
  return (
    <a href={href} className="flex items-center px-5 py-2 text-sm text-slate-500 hover:bg-teal-400/5 hover:text-teal-500 font-medium transition-all">
      <span>{title}</span>
    </a>
  )
}