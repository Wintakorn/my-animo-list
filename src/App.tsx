import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './component/Navigation';
import { Container } from './component/Container';
import Footer from './component/Footer';

import { Contact } from './component/Contact';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={''} />
            <Route path="/แนะนำ Anime" element={''} />
            <Route path="/Login" element={<Contact />}/>
            <Route path="blogs" element={''} />
            <Route path="*" element={''} />
          </Routes>
          <Container />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
