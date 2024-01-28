export default [
  {
    id: 'dashboards',
    title: 'sideMenu.management',
    icon: '/svgs/home.svg',
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'analyticsDash',
        title: 'sideMenu.userManagement',
        icon: '/svgs/home.svg',
        navLink: '/dashboard',
        permission: ['admin', 'manager', 'user'],
      },
      {
        id: 'analyticsDash2',
        title: 'sideMenu.roleManagement',
        icon: '/svgs/home.svg',
        navLink: '/dashboard',
        permission: ['admin', 'manager', 'user'],
      },
    ],
  },
  {
    id: 'dashboards',
    title: 'sideMenu.permissionManagement',
    icon: '/svgs/home.svg',
    badge: 'light-warning',
    badgeText: '2',
    navLink: '/roleManagement',
    permission: ['admin', 'manager', 'user'],
  },
];
