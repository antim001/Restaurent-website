import {useContext} from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const {logOut,user}=useContext(AuthContext)

const handleLogout=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error))
}
    const navLinks=<>
    <li className='text-orange-400 font-bold'><Link to='/'>Home</Link></li>
        <li className='text-orange-400 font-bold'>
          <Link to='/menu'> Our Menu</Link>
        </li>
       

<li className='text-orange-400 font-bold'><Link to="/order/salad">Order Now</Link></li>
<li className='text-orange-400 font-bold'><Link to="/secret">Secret</Link></li>

        {
          user ? <>
          <button onClick={handleLogout} className='text-orange-400 font-bold'>Log Out</button>         </>
           :<>
          <li className='text-orange-400 font-bold'><Link to="/login">Log In</Link></li>
          </>
        }
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-lg bg-slate-600 text-orange-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-orange-600">
        
{navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-orange-600">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
 
          <Link to='/'>
          <button className="btn bg-orange-600">
          <AiOutlineShoppingCart />
              <div className="badge badge-secondary">+0</div>
           </button></Link>
       
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          {user?user.displayName:"user"}
        </li>
        
      </ul>
    </div>
  </div>
  </div>

    );
};

export default Navbar;