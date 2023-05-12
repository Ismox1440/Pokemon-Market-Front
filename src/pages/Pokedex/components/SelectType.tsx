import { Select } from '@mantine/core';
import { typeColors } from '../../../config/pokemonColors';
import SelectItem from './SelectItem';

const SelectType = ({ handleSelect, currentType }: { currentType: string | null,handleSelect: Function }) => {
  let selectTypeData = [];
  for (let property in typeColors) {
    selectTypeData.push({
      label: property.charAt(0).toUpperCase() + property.slice(1),
      value: property,
      image: `https://raw.githubusercontent.com/msikma/pokesprite/master/misc/type-logos/gen8/${property}.png`,
      size: 'sm',
    });
  }
  return (
    <Select
      itemComponent={SelectItem}
      aria-label='type'
      placeholder='Type'
      value={currentType}
      maxDropdownHeight={400}
      data={selectTypeData}
      transitionProps={{
        transition: 'pop-top-left',
        duration: 90,
        timingFunction: 'ease',
      }}
      onChange={(e: string) => handleSelect(e, 'type')}
    />
  );
};

export default SelectType;
