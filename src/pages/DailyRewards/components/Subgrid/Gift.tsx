

const Gift = ({gift}) => {
  return (
    <div className='hover:scale-105 transition-all border-2 border-white relative flex flex-col items-center justify-center rounded bg-white'>
    <figure className='w-[100px]  bg-gradient-to-t relative from-orange-900 to-orange-800 h-[100px] flex items-center justify-center rounded-b-md rounded'>
      <div className='absolute bg-contain bg-center bg-no-repeat z-0 inset-0 bg-[url("https://res.cloudinary.com/dlekwh1wn/image/upload/v1683845058/flower_1_zuxc3w.png")] rounded-2xl shadow-lg opacity-[1]'></div>
      <img
        src={gift.giftItem.image}
        alt='gift'
        className='w-full p-5'
      />
    </figure>
    <div className='flex w-full bg-white'>
      <span className='text-gray-700 text-center py-1 font-bold w-full'>
        {gift.count}
      </span>
    </div>
  </div>
  )
}

export default Gift