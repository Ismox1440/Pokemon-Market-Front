import { Select } from '@mantine/core';
import SelectItem from './SelectItem';

let selectRarityData = [
  {
    size: 'md',
    value: 'common',
    label: 'Common',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },
  {
    size: 'md',
    value: 'mythical',
    label: 'Mythical',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
  },
  {
    size: 'md',
    value: 'legendary',
    label: 'Legendary',
    image:
      'https://publish.one37pm.net/wp-content/uploads/2021/09/20140912144107384Rayquaza.png?fit=1280%2C1280',
  },
];
const SelectRarity = ({ handleSelect, currentRarity }: { currentRarity?:string, handleSelect: Function }) => {
  return (
    <Select
      placeholder='Rarity'
      itemComponent={SelectItem}
      maxDropdownHeight={400}
      value={currentRarity ?? null}
      onChange={(e: string) => handleSelect(e, 'rarity')}
      data={selectRarityData}
      transitionProps={{
        transition: 'pop-top-left',
        duration: 90,
        timingFunction: 'ease',
      }}
    />
  );
};

export default SelectRarity;
