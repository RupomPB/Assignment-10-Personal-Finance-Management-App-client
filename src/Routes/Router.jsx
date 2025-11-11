import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home";
import AddTransaction from './../Pages/AddTransaction';
import MyTransactions from './../Pages/MyTransactions';
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRouter from "../Context/PrivateRouter";
import ErrorPage from "../Pages/ErrorPage";
import UpdateTransaction from "../Pages/UpdateTransaction";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
           index: true,
           Component: Home
        },
        {
            path: '/add-transaction',
            element: <PrivateRouter>
                <AddTransaction></AddTransaction>
            </PrivateRouter>
        },
        {
            path: '/my-transactions',
            element: <PrivateRouter>
                <MyTransactions></MyTransactions>
            </PrivateRouter>
        },
        {
            path:'/transaction/update/:id',
            loader: ({params})=>fetch(`http://localhost:3000/transactions/${params.id}`),
            element: <PrivateRouter>
                <UpdateTransaction></UpdateTransaction>
            </PrivateRouter>
        },
        {
            path: '/reports',
            element: <PrivateRouter>
                <Reports></Reports>
            </PrivateRouter>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path: '/profile',
            element: <PrivateRouter>
                <Profile></Profile>
            </PrivateRouter>
        },
        {
            path: '/profile/update',
            element: <PrivateRouter>
                <UpdateProfile></UpdateProfile>
            </PrivateRouter>
        },
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>
        }
    ]
  },
]);


export default router