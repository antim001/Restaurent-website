import React from 'react';

const MenuItem = ({item}) => {
 const {image,recipe,price,name}=item;
    return (
        <div>
            <div className='flex space-x-4 mr-12'>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
                <div>
                    <h1 className='text-yellow-500 text-2xl'>{name}</h1>
                    <p>{recipe}</p>
                </div>
                <p className='font-semibold'>${price}</p>
            </div>

        </div>
    );
};

export default MenuItem;