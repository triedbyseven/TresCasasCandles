interface MenuItems {
    index: number;
    id: number;
    title: string;
    icon: string;
};

export const menuItems: MenuItems[] = [
    {
        index: 0,
        id: 1,
        title: 'Home',
        icon: 'home'
    },
    {
        index: 1,
        id: 2,
        title: 'Search',
        icon: 'search'
    },
    {
        index: 2,
        id: 3,
        title: 'Favorites',
        icon: 'star'
    },
    {
        index: 3,
        id: 4,
        title: 'Alerts',
        icon: 'bell'
    },
    {
        index: 4,
        id: 5,
        title: 'Profile',
        icon: 'user'
    }
];