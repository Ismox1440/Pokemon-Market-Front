const Item = ({ itemImage }: { itemImage: string }) => {
  return (
    <div className='relative flex flex-col items-center justify-center rounded'>
      <figure className='w-[50px] h-[50px]  bg-gradient-to-t relative from-secondary to-primary  flex items-center justify-center rounded-b-md rounded'>
        <div className='absolute bg-contain bg-center bg-no-repeat z-0 inset-0 bg-[url("https://res.cloudinary.com/dlekwh1wn/image/upload/v1683845058/flower_1_zuxc3w.png")] rounded-2xl shadow-lg opacity-[1]'></div>
        <img src={itemImage} alt='gift' className='w-full p-2' />
      </figure>
    </div>
  );
};

export default Item;
