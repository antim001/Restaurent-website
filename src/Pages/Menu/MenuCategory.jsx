import {Link} from 'react-router-dom'
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
        <Link to={`/order/${title}`}>
        <button className='btn btn-outline  ml-64 md:ml-96 mb-10 mt-5 border-0 border-b-4'>Order Now</button>
        </Link>
        </div>
    );
};

export default MenuCategory;