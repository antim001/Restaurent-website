import { useState, useEffect } from 'react';


const useMenu=()=>{
 const [menu,setMenu]=useState([]);
 const [loading,setLoading]=useState(true)
 useEffect(()=>{
     fetch('https://bistro-boss-server-seven-gamma.vercel.app/menu')
     .then(res=>res.json())
     .then(data=>{
        setMenu(data);
        setLoading(false);
     })
    
 },[])
 return[menu,loading]
}
export default useMenu;