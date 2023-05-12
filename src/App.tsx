import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Pokedex from './pages/Pokedex';
import RandomPokemon from './pages/RandomPokemon';
import DailyRewards from './pages/DailyRewards';
import Login from './pages/Login';
import { Toaster } from 'sonner';
import UserPokemons from './pages/userpokemons';
import Market from './pages/Market';
import AuthMiddleware from './middleware';

function App() {
  return (
    <div className='h-screen bg-gray-900'>
      <Toaster />
      <BrowserRouter>
        <AuthMiddleware>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pokedex' element={<Pokedex />}></Route>
            <Route path='/random' element={<RandomPokemon />}></Route>
            <Route path='/dailyrewards' element={<DailyRewards />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/userpokemons' element={<UserPokemons />}></Route>
            <Route path='/pokemon/:_id' element={<Pokemon />}></Route>
            <Route path='/market' element={<Market />}></Route>
          </Routes>
        </AuthMiddleware>
      </BrowserRouter>
    </div>
  );
}

export default App;
