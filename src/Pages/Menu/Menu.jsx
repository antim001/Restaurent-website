
import { Helmet } from 'react-helmet-async';
import Cover from './../../Shared/Cover/Cover';
import banner from '../../assets/menu/banner3.jpg'
import PopularItems from './../Home/PopularItems/PopularItems';
const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss || Menu</title>
       
      </Helmet>
          
            <Cover img={banner} title ="OUR MENU"></Cover>
            <PopularItems></PopularItems>
            <Cover img={banner} title ="OUR MENU"></Cover>
            <PopularItems></PopularItems>
            <Cover img={banner} title ="OUR MENU"></Cover>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Menu;