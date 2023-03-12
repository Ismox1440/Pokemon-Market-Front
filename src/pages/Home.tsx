import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {
  decrement,
  increment,
  selectCounter,
} from '../redux/slices/counterSlice';

const Home = () => {
  const counterValue = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div className='h-[100vh] flex items-center justify-center flex-col bg-gray-800 gap-6'>
      <h1 className='text-4xl sm:text-6xl text-gray-200 font-bold text-center'>🦄 Isma boilerplate</h1>
      <p className='text-4xl text-gray-300 font-bold'>{counterValue.value}</p>
      <div className='flex gap-2'>
        <button
          onClick={() => dispatch(increment())}
          className='py-2 px-6 border border-gray-500 rounded text-gray-200'
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className='py-2 px-6 border border-gray-500 rounded text-gray-200'
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
