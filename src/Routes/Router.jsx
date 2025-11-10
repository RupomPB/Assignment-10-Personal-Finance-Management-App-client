import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home";
import AddTransaction from './../Pages/AddTransaction';
import MyTransactions from './../Pages/MyTransactions';
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



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
            path: '/addTransaction',
            element: <AddTransaction></AddTransaction>
        },
        {
            path: '/myTransactions',
            element: <MyTransactions></MyTransactions>
        },
        {
            path: '/reports',
            element: <Reports></Reports>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        }
    ]
  },
]);


export default router