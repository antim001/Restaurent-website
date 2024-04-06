import OrderFoodCard from './../../../Shared/OrderFoodCard/OrderFoodCard';

const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
      {
        item.map(item=><OrderFoodCard
        key={item._id}
        item={item}
        >
            
        </OrderFoodCard>)
      }
    </div>
    );
};

export default OrderTab;