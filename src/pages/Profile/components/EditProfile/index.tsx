import { useUpdateUserMutation } from '@/redux/api/userEndpoint';
import { IUser } from '@/types/user';
import {
  ActionIcon,
  Button,
  Group,
  Modal,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import {
  IconEdit,
  IconFileDescription,
  IconPhoto,
  IconUser,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { toast } from 'sonner';

const EditProfile = ({ user }: { user: IUser }) => {
  const imageUrlRegex = /^(https?:\/\/)?\S+?\.(jpg|jpeg|png|gif)$/;
  const [opened, { open, close }] = useDisclosure(false);
  const [update, { isLoading, isError, isSuccess }] = useUpdateUserMutation();
  const form = useForm({
    initialValues: {
      username: user.username,
      description: user.description,
      image: user.image,
    },
    validate: {
      username: value =>
        value.length < 24 && value.length > 0
          ? null
          : 'Username must be at least 16 characters long',
      description: value =>
        value.length < 100 && value.length > 0
          ? null
          : 'Description must be at least 100 characters long',
      image: value =>
        imageUrlRegex.test(value) ? null : 'Url  must be a valid image url',
    },
  });

  const handleSubmit = (formValues: {
    username: string;
    description: string;
    image: string;
  }) => {
    close();
    update({ user, ...formValues });
  };

  useEffect(() => {
    if (isSuccess) toast.success('Profile updated successfully');
    if (isError) toast.error('Error updating profile');
  }, [isSuccess, isError]);

  return (
    <div>
      <Modal zIndex={1000} opened={opened} onClose={close} title='Change Profile'>
        <div>
          <form
            className='flex flex-col gap-4'
            onSubmit={form.onSubmit(values => handleSubmit(values))}
          >
            <TextInput
              {...form.getInputProps('username')}
              icon={<IconUser />}
              placeholder='Username'
            />
            <TextInput
              {...form.getInputProps('description')}
              icon={<IconFileDescription />}
              placeholder='Description'
            />
            <TextInput
              {...form.getInputProps('image')}
              icon={<IconPhoto />}
              placeholder='Image Url'
            />

            <Group position='right' mt='md'>
              <Button variant='default' type='submit'>
                Submit
              </Button>
            </Group>
          </form>
        </div>
      </Modal>
      <ActionIcon
        onClick={open}
        variant='default'
        loading={isLoading}
        className='absolute right-10 top-10 mt-[50px]'
      >
        <IconEdit size='1.125rem' />
      </ActionIcon>
    </div>
  );
};

export default EditProfile;
