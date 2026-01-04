import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home";
import AddTransaction from "./../Pages/AddTransaction";
import MyTransactions from "./../Pages/MyTransactions";
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRouter from "../Context/PrivateRouter";
import ErrorPage from "../Pages/ErrorPage";
import UpdateTransaction from "../Pages/UpdateTransaction";
import TransactionsDetails from "../Pages/TransactionsDetails";
import DashboardLayouts from "./../dashboard/DashboardLayouts";
import DashboardOverView from "../dashboard/DashboardOverview/DashboardOverview";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
    
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
       {
        path: "transaction/:id",
        loader: ({ params }) =>
          fetch(
            `https://finease-server-psi.vercel.app/transactions/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <TransactionsDetails></TransactionsDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "transaction/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://finease-server-psi.vercel.app/transactions/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <UpdateTransaction></UpdateTransaction>
          </PrivateRouter>
        ),
      },
      {
        path: '/about',
        element: <About></About>
      },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        {" "}
        <DashboardLayouts></DashboardLayouts>
      </PrivateRouter>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
       {
        path: "profile/update",
        element: (
         
            <UpdateProfile></UpdateProfile>
          
        ),
      },
      {
        path: "reports",
        element: (
         
            <Reports></Reports>
         
        ),
      },
        {
        path: "add-transaction",
        element: (
          <PrivateRouter>
            <AddTransaction></AddTransaction>
          </PrivateRouter>
        ),
      },
      {
        path: "my-transactions",
        element: (
          <PrivateRouter>
            <MyTransactions></MyTransactions>
          </PrivateRouter>
        ),
      },
      {
        path: 'dashboardOverview',
        element: <DashboardOverView></DashboardOverView>
      }
     
      
    ],
  },
]);

export default router;
