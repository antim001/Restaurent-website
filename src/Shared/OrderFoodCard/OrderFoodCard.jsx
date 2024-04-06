import React from 'react';

const OrderFoodCard = ({item}) => {
    const {image,recipe,price,name}=item;
    console.log(item);
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-0 bg-slate-900 text-white mr-4 mt-4'>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to cart</button>
      <button className='btn btn-outline text-white mt-5 border-0 border-b-4'>Order Now</button>
    </div>
  </div>
</div>
    );
};

export default OrderFoodCard;