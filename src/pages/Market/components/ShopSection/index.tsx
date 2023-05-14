import { useGetShopQuery } from '@/redux/api/itemEndpoint';
import ShopItem from './ShopItem';

const ShopSection = () => {
  const {data: shop} = useGetShopQuery()
  return (
    <>
      <h3 className='text-gray-300 mt-20 mb-6 text-2xl'>Item shop</h3>
      <div className='flex gap-6'>
        {shop?.pokeballs &&
          shop?.pokeballs.map((item) => (
            <ShopItem key={item._id} item={item} {...item} />
          ))}
        {shop?.items &&
          shop?.items.map((item) => (
            <ShopItem key={item._id} item={item} {...item} />
          ))}
      </div>
    </>
  );
};

export default ShopSection;
