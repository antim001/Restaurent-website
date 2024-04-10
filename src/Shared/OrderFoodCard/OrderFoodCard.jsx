import {useContext} from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


const OrderFoodCard = ({ item }) => {
  const {image,recipe,price,name,_id}=item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation()

  const handleAddToCart = (food) => {
    if (user && user.email) {
     const cartItem={
      menuId:_id,
      email:user.email,
      name,image,price
          
     }
     console.log(food);
     axios.post('http://localhost:5000/carts',cartItem)
     .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has added successfully`,
            showConfirmButton: false,
            timer: 1500
          });
        }
     })
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to add food to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}}); // Navigate to login page
        }
      });
    }
  }


   
    
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-0 bg-slate-900 text-white mr-4 mt-4'>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
      
    </div>
  </div>
</div>
    );
};

export default OrderFoodCard;