import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

export default function InfoPopover() {
  return (
    <Group position='center'>
      <HoverCard
       
        shadow='md'
        withArrow
      
        openDelay={200}
        closeDelay={400}
      >
        <HoverCard.Target>
          <Avatar
            src='https://avatars.githubusercontent.com/u/79146003?s=200&v=4'
            radius='xl'
          />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group position='center'>
            <Avatar
              src='https://avatars.githubusercontent.com/u/79146003?s=200&v=4'
              radius='xl'
            />
            <Stack spacing={5}>
              <Text size='sm' weight={700} sx={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href='https://twitter.com/mantinedev'
                color='dimmed'
                size='xs'
                sx={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size='sm' mt='md'>
            Customizable React components and hooks library with focus on
            usability, accessibility and developer experience
          </Text>

          <Group mt='md' spacing='xl'>
            <Text size='sm'>
              <b>0</b> Following
            </Text>
            <Text size='sm'>
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
