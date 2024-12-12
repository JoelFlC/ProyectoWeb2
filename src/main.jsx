import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Edad1 from './components/Edad1.jsx';
import Edad2 from './components/Edad2.jsx';
import Edad3 from './components/Edad3.jsx';
import Espacio from './components/Espacio.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Marca1 from './components/Marca1.jsx';
import Marca2 from './components/Marca2.jsx';
import Marca3 from './components/Marca3.jsx';
import Marca4 from './components/Marca4.jsx';
import Nav from './components/Nav.jsx';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Nav />
      <Espacio />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marca1" element={<Marca1 />} />
        <Route path="/marca2" element={<Marca2 />} />
        <Route path="/marca3" element={<Marca3 />} />
        <Route path="/marca4" element={<Marca4 />} />

        <Route path="/edad1" element={<Edad1 />} />
        <Route path="/edad2" element={<Edad2 />} />
        <Route path="/edad3" element={<Edad3 />} />

        <Route path="/cuenta" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
