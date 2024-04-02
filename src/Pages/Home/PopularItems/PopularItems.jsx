import {useState,useEffect} from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import MenuItem from './../../../Shared/MenuItem/MenuItem';

const PopularItems = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const filterItems=data.filter(item=>item.category ==='popular')
            setMenu(filterItems);
            console.log(menu);
        })
    },[])
    return (
        <div>
            <SectionTitle
               subHeading='-------check it out---------'
               heading='From Our Menu'
            >

            </SectionTitle>
           <div className='grid md:grid-cols-2 space-y-4 mt-12 mb-12'>
            {
                menu.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    >
                    
                    </MenuItem>)
            }
           </div>
        </div>
    );
};

export default PopularItems;