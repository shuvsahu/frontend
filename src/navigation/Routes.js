import { Home, Login , Register , FoodMenu, Cart, Orders} from '../screens'

export const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
];

export const privateRoutes = [
    {
        path: "/menu",
        component: <FoodMenu />,
    },
    {
        path: "/cart",
        component: <Cart />,
    },
    {
        path: "/orders",
        component: <Orders />,
    }
];
