import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stat = ({
  name,
  value,
  icon,
}: {
  name: string;
  value: number;
  icon: IconDefinition;
}) => {
  return (
    <div className='flex flex-col text-gray-400 items-center justify-center gap-1 w-fit'>
      <div className='p-4 flex items-center justify-center bg-[url("https://wiki.hoyolab.com/_nuxt/img/entry_ic.f257e0c.png")] bg-contain bg-no-repeat'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};

export default Stat;
