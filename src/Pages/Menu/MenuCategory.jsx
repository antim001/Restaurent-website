import React from 'react';
import MenuItem from './../../Shared/MenuItem/MenuItem';
import Cover from './../../Shared/Cover/Cover';

const MenuCategory = ({item,coverImg,title}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title ={title}></Cover>}
        <div className='grid md:grid-cols-2 space-y-4 mt-12 mb-12'>
             {
                item.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    >
                    
                    </MenuItem>)
            }
        </div>
        </div>
    );
};

export default MenuCategory;