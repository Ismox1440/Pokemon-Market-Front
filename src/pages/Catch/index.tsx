import useUser from '@/hooks/useUser';
import { MainLayout, CardPokemon, LoadingScreen, Loading } from '@/components';
import PokeballMenu from './componentes/PokeballMenu';
import { useUsePokeballMutation } from '@/redux/api/userEndpoint';

const Catch = () => {
  const { user, isLoading: loadingUser } = useUser();
  const [trigger, { data, isLoading, isError }] = useUsePokeballMutation();
  if (loadingUser || !user) return <LoadingScreen />;
  return (
    <MainLayout>
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        {(!data || isLoading || isError) && (
          <div className='m-[10px] relative'>
            <Loading />
          </div>
        )}
        {data && !isLoading && (
          <div className='m-[10px] relative'>
            <CardPokemon pokemon={data.pokemon} />
          </div>
        )}

        <PokeballMenu isLoading={isLoading} trigger={trigger} user={user} />
      </div>
    </MainLayout>
  );
};

export default Catch;
