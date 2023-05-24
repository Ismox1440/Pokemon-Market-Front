import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import AuthMiddleware from './middleware';
import {
  Home,
  Pokemon,
  Pokedex,
  Login,
  Market,
  Top,
  Profile,
  Catch,
  Gifts,
} from '@/pages';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AuthMiddleware>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pokedex' element={<Pokedex />}></Route>
            <Route path='/catch' element={<Catch />}></Route>
            <Route path='/dailyrewards' element={<Gifts />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/profile/:id' element={<Profile />}></Route>
            <Route path='/pokemon/:_id' element={<Pokemon />}></Route>
            <Route path='/market' element={<Market />}></Route>
            <Route path='/top' element={<Top />}></Route>
          </Routes>
        </AuthMiddleware>
      </BrowserRouter>
    </>
  );
}

export default App;
