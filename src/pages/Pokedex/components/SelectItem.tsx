import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Avatar, Group, Text } from '@mantine/core';
import { forwardRef } from 'react'
export interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    icon?: IconProp;
  }

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, size = 'xs', ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar className=' ' size={size} src={image} />
          <div>
            <Text size='sm'>{label}</Text>
            <Text size='xs' opacity={0.65}>
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );

export default SelectItem