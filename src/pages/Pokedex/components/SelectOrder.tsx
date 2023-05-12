import SelectItemSort from './SelectItemSort';
import { Select } from '@mantine/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const SelectOrder = ({
  handleSelect,
  currentOrder,
}: {
  currentOrder: string | null;
  handleSelect: Function;
}) => {
  return (
    <Select
      itemComponent={SelectItemSort}
      placeholder='Order'
      value={currentOrder}
      maxDropdownHeight={400}
      onChange={(e: string) => handleSelect(e, 'order')}
      data={[
        { icon: faArrowUp, label: 'Ascending', value: 'asc' },
        { icon: faArrowDown, label: 'Descending', value: 'desc' },
      ]}
      transitionProps={{
        transition: 'pop-top-left',
        duration: 90,
        timingFunction: 'ease',
      }}
    />
  );
};

export default SelectOrder;
