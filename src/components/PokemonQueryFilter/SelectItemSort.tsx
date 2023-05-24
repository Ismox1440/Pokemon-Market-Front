import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group, Text } from '@mantine/core';
import { forwardRef } from 'react';
import { ItemProps } from './SelectItem';

const SelectItemSort = forwardRef<HTMLDivElement, ItemProps>(
  ({ icon, label, size = 'xs', ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {icon && <FontAwesomeIcon icon={icon} />}
        <div>
          <Text size='sm'>{label}</Text>
        </div>
      </Group>
    </div>
  )
);

export default SelectItemSort;
