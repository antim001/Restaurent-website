import {createBrowserRouter} from "react-router-dom";
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home/Home';
import Menu from './../Pages/Menu/Menu';
import Order from './../Pages/Order/Order/Order';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Secret from './../Secret/Secret';
import DashBoard from './../Layout/DashBoard';
import Cart from './../Pages/Dashboard/Cart/Cart';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
                path:'/menu',
                element:<Menu></Menu>
         },
         {
            path:'/order/:category',
            element:<Order></Order>
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/register',
            element:<Register></Register>
         },
         {
             path:'/secret',
             element:<PrivateRoute><Secret></Secret></PrivateRoute>
         }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
          {
            path:'cart',
            element:<Cart></Cart>
          }

      ]
    }
  ]);
  export default router;