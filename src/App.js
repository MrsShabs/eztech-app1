import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import Movie from './pages/Movies.js';
import SearchResults from './pages/SearchResults.js';
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
      users: [], 
      movies: [],
      results: [],
      list: [],
      cart: []
    };
  }
  componentDidMount() {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || this.state.users;
    this.setState({ users: savedUsers });
  }
  
  saveData = () => {
    localStorage.setItem('users', JSON.stringify(this.state.users));
    };


  // funtion to take move and aded to the cart state 
  addToCart = (movie) => {
    this.setState (
    (prevState) => ({     
      cart: [...prevState.cart, movie] // forcing append to movies array right after what is in the list already 
    })
  );
  console.log(this.state.cart)
}
  
  /*
  addNewList = (lists) => {
    this.setState(
      (prevState) => ({
        lists: [...prevState.lists, list].sort((a,b) =>
          a.name.localeCompare(b.name))
      }),
      this.saveData
    );
  }; */
  
render () {
  return (
    <>
    <div className="App">
    <section>
    <Navbar />
      <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movie" element={<Movie addToCart={this.addToCart}/>} />
          <Route path='/searchResults' element={<SearchResults />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/cart" element={<Cart cart={this.state.cart} />} />
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
