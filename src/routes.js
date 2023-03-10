import DashboardLayout from './layout/DashboardLayout';
import AuthLayout from './layout/AuthLayout';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/404';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Products from './pages/Products';
import User from './pages/User';

const PageRoutes = [
    {
        path: '/',
        component: DashboardLayout,
        routes: [{ path: '/', component: Dashboard }],
    },
    {
        path: '/auth',
        component: AuthLayout,
        routes: [
            { path: '/auth/login', component: Login },
            { path: '/auth/register', component: Register },
        ],
    },
    {
        path: '/dashboard',
        component: DashboardLayout,
        routes: [
            { path: '/dashboard/app', component: Dashboard },
            { path: '/dashboard/user', component: User },
            { path: '/dashboard/products', component: Products },
            { path: '/dashboard/blog', component: Blog },
        ],
    },
    { path: '*', component: ErrorPage },
];

export default PageRoutes;
