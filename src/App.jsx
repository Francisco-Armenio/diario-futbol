import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import NoticiaCentral from './componentes/NoticiaCentral';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/noticiaCentral" element={<NoticiaCentral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
