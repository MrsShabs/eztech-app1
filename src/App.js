import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import Movie from './pages/Movie.js';
import Lists from './pages/Lists.js';
import StreamList from './pages/StreamList.js';
import UserProfile from './pages/UserProfile.js';
import Support from './pages/Support.js';
import Footer from './Footer';
import './App.css';
import './Navbar.css';
import './Footer.css';

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      users: []
    };

  }


render () {
  return (
    <>
    <div className="App">
    <section>
    <Navbar />
      <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support/>} />
      </Routes>
      </section>
      {/* footer in black  */}
      <Footer/>
    </div>
    </>
  );

}

} //class App 
export default App;


/*
  addUser = (user) => {
    this.setState(
      (prevState) => ({
        user: [...prevState.user, user].sort((a,b) =>
          a.email.localeCompare(b.email))
      }),
      this.saveData
    );
  };
*/
