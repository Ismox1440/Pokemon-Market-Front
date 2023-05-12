import {
  faHeart,
  faBoltLightning,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    attack: string | number
    defense: string | number
    hp: string | number
}

const PokemonCardStats = ({attack, defense, hp}: IProps) => {
  return (
    <div className='text-gray-400 mt-1 flex gap-4 items-center  tracking-wider whitespace-nowrap overflow-hidden text-xs'>
      <div>
        <FontAwesomeIcon icon={faHeart} /> {hp}
      </div>
      <div>
        <FontAwesomeIcon icon={faBoltLightning} /> {attack}
      </div>
      <div>
        <FontAwesomeIcon icon={faShield} /> {defense}
      </div>
    </div>
  );
};

export default PokemonCardStats;
