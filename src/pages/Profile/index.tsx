import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import Header from './components/Header';
import PokemonsInfoSection from './components/PokemonsInfoSection';
import useGetUserById from '@/hooks/useGetUserById';
import LoadingScreen from '@/components/LoadingScreen';
import { Button } from '@mantine/core';
import useUser from '@/hooks/useUser';
import EditProfile from './components/EditProfile';
import { PokemonQueryFilter } from '@/components';
import { useGetUserByIdQuery } from '@/redux/api/userEndpoint';

const UserNotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className='h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-11'>
          <h1 className='text-title text-center text-5xl font-bold'>
            User Not Found :(
          </h1>
          <Button onClick={() => navigate(-1)} variant='default'>
            Back
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

const Profile = () => {
  const { id } = useParams();
  const {
    user: sesionUser,
    isLoading: loadingSesionUser,
    isFetching,
  } = useUser();

  const { data, isLoading, error } = useGetUserByIdQuery(id ?? '');
  if (isLoading || loadingSesionUser) return <LoadingScreen />;
  if (error || !data.user || !sesionUser) return <UserNotFoundPage />;
  return (
    <MainLayout>
      {id === sesionUser._id && <EditProfile user={sesionUser} />}
      <div className='px-2 lg:px-40 mt-20'>
        <Header
          isFetching={isFetching}
          user={id === sesionUser._id ? sesionUser : data.user}
        />
        {data.bestPokemons.length > 0 && (
          <PokemonsInfoSection
            info={data.userPokemonsInfo}
            data={data.bestPokemons}
          />
        )}
      </div>
      <div className='lg:mx-40 mt-20 relative'>
        <h2
          className='text-4xl mt-11 text-center font-bold text-title'
          style={{ fontFamily: 'Genshin-Regular' }}
        >
          User Pokemons
        </h2>
        <PokemonQueryFilter customQuery={`owner=${id}`} />
      </div>
    </MainLayout>
  );
};

export default Profile;
