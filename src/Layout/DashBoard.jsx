import {NavLink,Outlet} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillHome } from "react-icons/ai";
import { FaCalendarWeek } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { BsEnvelopeFill } from "react-icons/bs";
import useCart from './../hooks/useCart';
import { FaUtensils } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import useAdmin from './../hooks/useAdmin';
const DashBoard = () => {
    
   const [isAdmin]=useAdmin()
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin?<>
                        <li><NavLink to='/dashboard/adminhome'>
                <AiFillHome/>
                        Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/additems'>
                        <FaUtensils/>
                       Add items</NavLink></li>

                        <li><NavLink to='/dashboard/manageitems'>
                    
                           <FaList></FaList>
                        Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/managebookings'>
                    <CiBookmarkCheck/>
                      Manage Bookings  </NavLink></li>
                        <li><NavLink to='/dashboard/allusers'>
                        <LuUsers2/>
                       All users</NavLink></li>
                        
                        </>:
                        <>
                        
                        </>
                    }
                
                        <div className="divider"></div>

                        <li><NavLink to='/'>
                <AiFillHome/>
                        Home</NavLink></li>

                        <li><NavLink to='/menu'>
                
                <CiSearch></CiSearch>
                        Menu</NavLink></li>

                        <li><NavLink to='/order/contact'>
                
                <BsEnvelopeFill></BsEnvelopeFill>
                        Contact</NavLink></li>
                </ul>
              
                
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;