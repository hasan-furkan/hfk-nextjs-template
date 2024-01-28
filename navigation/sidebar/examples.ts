export default [
  {
    id: 'settings',
    title: 'sideMenu.settings',
    icon: '/svgs/home.svg',
    children: [
      {
        id: 'dtBasic',
        title: 'sideMenu.userManagement',
        icon: '/svgs/home.svg',
        navLink: '/settings',
        permission: ['admin', 'manager', 'user'],
      },
    ],
  },
];
