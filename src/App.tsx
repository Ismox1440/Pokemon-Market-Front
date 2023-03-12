import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
