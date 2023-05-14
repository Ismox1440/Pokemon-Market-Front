const PokemonCardLoading = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className='w-[252px] h-[308px] bg-[#3A4254] flex flex-col rounded-lg border-[#282c34] transition-all duration-100 hover:border-[#31363f] overflow-hidden '>
        <div
          className={` w-full h-[240px] animate-pulse bg-[#2e3442] relative flex items-center flex-col`}
        ></div>
        <div className='w-full py-[15px] px-[10px] relative h-[76px] flex'>
          <div className='w-[90%]'>
            <div className='h-[8px] bg-[#2e3442] animate-pulse rounded'></div>
            <div className='h-[8px] w-[70%] bg-[#2e3442] animate-pulse rounded mt-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardLoading;
