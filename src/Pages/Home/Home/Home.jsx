
import Banner from './../Banner/Banner';
import Category from './../Category/Category';
import PopularItems from './../PopularItems/PopularItems';
import Featured from './../Featured/Featured';
import Testimonials from './../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularItems></PopularItems>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;