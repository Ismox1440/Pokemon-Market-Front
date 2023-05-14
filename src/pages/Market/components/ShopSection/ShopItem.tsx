import { shortenQuantity } from '@/utils/userUtils';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HoverCard, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import BuyButton from './BuyButton';
import { IItem } from '@/types/item';
import { IPokeball } from '@/types/pokeball';

interface IProps {
  item: combinedInterface;
}
export interface combinedInterface extends IPokeball, IItem {}

const ShopItem = ({ item }: IProps) => {
  const { image, description, name, catchRate, price } = item;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        zIndex={1000}
        opened={opened}
        onClose={close}
        title={`Buy ${name}`}
        centered
      >
        <span
          className='text-sm text-gray-300'
          style={{ fontFamily: 'Poppins' }}
        >
          {description}
        </span>
        <img
          src='https://wiki.hoyolab.com/_nuxt/img/home_module_line.bd7c04f.png'
          className='mt-2'
          alt='line'
        />
        <div>
          <BuyButton item={item} itemType={catchRate ? 'pokeball' : 'item'} />
        </div>
      </Modal>

      <HoverCard closeDelay={0} width={300}>
        <HoverCard.Target>
          <div
            onClick={open}
            className='w-fit group hover:scale-105 transition-all cursor-pointer relative flex flex-col items-center justify-center rounded'
          >
            <figure className='w-[100px] relative h-[100px] flex items-center justify-center rounded-b-md rounded'>
              <div className='absolute bg-center bg-contain bg-no-repeat z-0 inset-0 bg-[url("https://res.cloudinary.com/dlekwh1wn/image/upload/v1683844877/Frame_15_jbntdh.png")] rounded-2xl  opacity-[.4] invert group-hover:opacity-100 transition-all'></div>
              <img
                style={{ imageRendering: 'pixelated' }}
                src={image}
                alt='item shop'
                className='w-full p-6 relative z-10'
              />
            </figure>
            <div className='flex flex-col w-full '>
              <span className='text-gray-300 text-center py-1 w-full'>
                {name}
              </span>
              <span className='text-gray-300 text-center flex gap-1 items-center justify-center w-full'>
                <FontAwesomeIcon icon={faCoins} />
                {shortenQuantity(price)}
              </span>
            </div>
          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <div className='flex flex-col gap-1'>
            <span className='text-gray-300 text-md'>{name}</span>
            <span
              style={{ fontFamily: 'Poppins' }}
              className='text-gray-300 text-sm'
            >
              {description}
            </span>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
};

export default ShopItem;
