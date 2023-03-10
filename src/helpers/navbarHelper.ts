interface NavbarItem {
  title: string;
  href: string;
}

export const publicNavbarItems: NavbarItem[] = [
  {
    title: 'Visão geral',
    href: '/',
  },
  {
    title: 'Minhas reservas',
    href: '/me/bookings',
  },
];

export const adminNavbarItems: NavbarItem[] = [
  {
    title: 'Visão geral',
    href: '/admin/overview',
  },
  {
    title: 'Gerenciar reservas',
    href: '/admin/bookings',
  },
  {
    title: 'Gerenciar agenda',
    href: '/admin/events',
  },
  {
    title: 'Avisos',
    href: '/admin/announcements',
  },
];



