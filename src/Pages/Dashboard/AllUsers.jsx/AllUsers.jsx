
import { CiUser } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal  from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure=useAxiosSecure();
    const{data: users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeadmin=(user)=>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
          refetch()
          Swal.fire({
         title: `${user.name} is now new admin`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,make admin!"
          })
        }
      })
    }
    const handleDelete=(user)=>{
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
        
        axiosSecure.delete(`/users/${user._id}`)
       
        .then(res=>{
            if(res.data.deletedCount>0)
            refetch()
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
        <div>
            <div className='flex justify-evenly my-4'>
            <h2 className='text-3xl'>All users</h2>
            <h3 className='text-3xl'>Total users:{users.length}</h3>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
     users.map((user,index)=><tr key={user._id} className="bg-base-200">
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
    {
      user.role==='admin'?'Admin': <button onClick={()=>handleMakeadmin(user)}>
      <CiUser className='text-4xl'></CiUser>
      </button>
    }
        </td>
        <td>
        <button onClick={()=>handleDelete(user)} className='text-3xl'>
       <MdDelete/>
         </button>
         </td>
        
       
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;