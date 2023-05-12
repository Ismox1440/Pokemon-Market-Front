import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';

const data = [
  {
    image:
      'https://github.com/PokeAPI/sprites/blob/master/sprites/items/net-ball.png?raw=true',
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
    description: 'The pokeball serves to obtain a random pokemon',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    value: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    value: 'Spongebob Squarepants',
    description: 'Not just a sponge',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
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

function PokeballSelect() {
  return (
    <Select
      label='Choose employee of the month'
      placeholder='Pick one'
      itemComponent={SelectItem}
      data={data}
      className='w-[300px]'
      maxDropdownHeight={600}
      nothingFound='Nobody here'
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}

export default PokeballSelect;
