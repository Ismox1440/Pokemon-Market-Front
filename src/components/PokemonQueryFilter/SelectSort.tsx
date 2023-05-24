import { Select } from '@mantine/core';
import SelectItemSort from './SelectItemSort';
import {
  faChartSimple,
  faDisease,
  faHashtag,
  faPercent,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';

let selectSort = [
  { icon: faChartSimple, label: 'Stats', value: 'stats' },
  { icon: faPercent, label: 'Capture Rate', value: 'captureRate' },
  { icon: faHashtag, label: 'Pokeapi', value: 'pokeApiId' },
  { icon: faDisease, label: 'Base experience ', value: 'baseExperience' },
  { icon: faSliders, label: 'Height', value: 'height' },
  { icon: faSliders, label: 'Weight', value: 'weight' },
];

const SelectSort = ({
  handleSelect,
  currentSort,
}: {
  currentSort: string | null;
  handleSelect: Function;
}) => {
  return (
    <Select
      placeholder='Sort'
      maxDropdownHeight={400}
      data={selectSort}
      value={currentSort}
      onChange={(e: string) => handleSelect(e, 'sort')}
      itemComponent={SelectItemSort}
      transitionProps={{
        transition: 'pop-top-left',
        duration: 90,
        timingFunction: 'ease',
      }}
    />
  );
};

export default SelectSort;
