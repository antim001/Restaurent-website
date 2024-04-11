import React from 'react';
import useCart from './../../../hooks/useCart';
import { MdDelete } from "react-icons/md";
import Swal  from 'sweetalert2';
import useAxiosSecure from './../../../hooks/useAxiosSecure';

const Cart = () => {
    const [cart,refetch]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiosSecure()
    const handleDelete=(id)=>{
      refetch()
        Swal.fire({
         
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount>0)
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
                )
            }
          });
    }
    return (
        <div className='mt-10 ml-10'>
           <div className='flex justify-evenly gap-10'>
 <h1 className='text-2xl text-orange-600'>Total items:{cart.length}</h1>
 <h1 className='text-2xl text-orange-600'>Total price:{totalPrice}</h1>
 <button className='btn btn-primary'>pay</button>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index)=><tr key={item._id}>
            <th>
             {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {item.name}
             
              
            </td>
            <td> ${item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-700">
                <MdDelete></MdDelete>
              </button>
            </th>
          </tr>)
      }
      
      
      
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Cart;