import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Movie from './pages/Movie';
import StreamList from './pages/StreamList';
import UserProfile from './pages/UserProfile';
import Footer from './Footer';
import './App.css';
import './Navbar.css';
import './Footer.css';

function App() {
  return (
    <>
    <div className="App">
    <section>
    <Navbar />
      <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
      </Routes>
      </section>
      {/* footer in black  */}
      <Footer/>
    </div>
    </>
  );

}
export default App;
