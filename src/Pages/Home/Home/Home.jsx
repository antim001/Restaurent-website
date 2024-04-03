
import Banner from './../Banner/Banner';
import Category from './../Category/Category';
import PopularItems from './../PopularItems/PopularItems';
import Featured from './../Featured/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularItems></PopularItems>
           <Featured></Featured>
        </div>
    );
};

export default Home;