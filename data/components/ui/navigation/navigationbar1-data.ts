interface MenuItems {
    index: number;
    id: number;
    title: string;
    icon: string;
    route: string;
};

export const menuItems: MenuItems[] = [
    {
        index: 0,
        id: 1,
        title: 'Home',
        icon: 'home',
        route: 'Home'
    },
    {
        index: 1,
        id: 2,
        title: 'Search',
        icon: 'search',
        route: 'Home'
    },
    {
        index: 2,
        id: 3,
        title: 'Favorites',
        icon: 'star',
        route: 'Home'
    },
    {
        index: 3,
        id: 4,
        title: 'Alerts',
        icon: 'bell',
        route: 'Home'
    },
    {
        index: 4,
        id: 5,
        title: 'Profile',
        icon: 'user',
        route: 'Home'
    }
];