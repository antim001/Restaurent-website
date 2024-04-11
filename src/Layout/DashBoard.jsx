import {NavLink,Outlet} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillHome } from "react-icons/ai";
import { FaCalendarWeek } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                <li><NavLink to='/dashboard/userhome'>
                <AiFillHome/>
                        User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservartion'>
                    <FaCalendarWeek></FaCalendarWeek>
                        My reservation</NavLink></li>

                        <li><NavLink to='/dashboard/cart'>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                        My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/review'>
                    <VscPreview></VscPreview>
                        feedback</NavLink></li>
                        <li><NavLink to='/dashboard/payments'>
                  < MdOutlinePayment/>
                        Payment</NavLink></li>
                        <li><NavLink to='/dashboard/bookings'>
                       < BsListCheck/>
                        My bookings</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to='/'>
                <AiFillHome/>
                        Home</NavLink></li>

                        <li><NavLink to='/menu'>
                
                <CiSearch></CiSearch>
                        Menu</NavLink></li>
                </ul>
              
                
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;