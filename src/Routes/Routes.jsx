import {createBrowserRouter} from "react-router-dom";
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home/Home';
import Menu from './../Pages/Menu/Menu';
import Order from './../Pages/Order/Order/Order';
import Login from './../Pages/Login/Login';

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
         }
      ]
    },
  ]);
  export default router;