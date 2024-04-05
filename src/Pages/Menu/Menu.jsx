
import { Helmet } from 'react-helmet-async';
import Cover from './../../Shared/Cover/Cover';
import banner from '../../assets/menu/banner3.jpg'
import useMenu from './../../hooks/useMenu';
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
import desertImg from '../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import MenuItem from './../../Shared/MenuItem/MenuItem';


const Menu = () => {
 const [menu] =useMenu();
 const dessert=menu.filter(item=>item.category==='dessert');
 const soup=menu.filter(item=>item.category==='soup');
 const salad=menu.filter(item=>item.category==='salad');
 const pizza=menu.filter(item=>item.category==='pizza');
 const offered=menu.filter(item=>item.category==='offered');

    return (
        <div>
            <Helmet>
        <title>Bistro Boss || Menu</title>
       
      </Helmet>
          
            <Cover img={banner} title ="OUR MENU"></Cover>
            <SectionTitle heading='Todays Offer' subHeading="don't miss it"></SectionTitle>
        <MenuCategory item={offered}></MenuCategory>
        <MenuCategory item={dessert} coverImg={desertImg} title="Dessert"></MenuCategory>
        <MenuCategory item={salad} coverImg={saladImg} title="Salad"></MenuCategory>
        <MenuCategory item={soup} coverImg={saladImg} title="Soup"></MenuCategory>
        <MenuCategory item={pizza} coverImg={pizzaImg} title="Pizza"></MenuCategory>

        
        </div>
        
    );
};

export default Menu;