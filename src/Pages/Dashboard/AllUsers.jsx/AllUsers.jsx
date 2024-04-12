import React from 'react';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const axiosSecure=useAxiosSecure();
    const{data: users=[]}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users')
            return res.data
        }
    })
   
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
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
     users.map(user=><tr key={user._id} className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;