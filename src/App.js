import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import Movie from './pages/Movie.js'; 
import SearchResults from './pages/SearchResults.js';
import Lists from './pages/Lists.js';
import StreamList from './pages/StreamList.js';
import UserProfile from './pages/UserProfile.js';
import Support from './pages/Support.js';
import Footer from './Footer';
import Popup from './Popup'; 
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
      favorites: [],
      cart: [],
      showPopup: '', // message to display in the popup for at to list
      popupMessage: '', // Add popupMessage to state
    };
  }
  
  //local storage
  componentDidMount() {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || this.state.users;
    const savedCart = JSON.parse(localStorage.getItem('cart')) || this.state.cart;
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || this.state.favorites;
    this.setState({ users: savedUsers, cart: savedCart, favorites: savedFavorites });
  }
  
  /*
  saveData = () => {
    localStorage.setItem('users', JSON.stringify(this.state.users));
  };

  // Function to add movie to the cart state
  addToCart = (movie) => {
    this.setState((prevState) => {
      // Check if the movie is already in the cart
      if (!prevState.cart.some((cartMovie) => cartMovie.id === movie.id)) {
        const updatedCart = [...prevState.cart, movie];
        localStorage.setItem('cart', JSON.stringify(updatedCart)); //save updated cart to local storage
        console.log('Movie added to cart:', movie); // log added movie
        return { 
          popupMessage: 'Movie added to cart!', // message to display in the popup
          showPopup: true 
        };
      } else {
        return {
          popupMessage: 'Movie is already in cart!', 
          showPopup: true 
        };
      }
    });
  };

  // Function to add movie to the favorites list
  addToList = (movie) => {
    this.setState((prevState) => {
      // Check if the movie is already in the favorites list
      if (!prevState.favorites.some((favMovie) => favMovie.id === movie.id)) {
        const updatedFavorites = [...prevState.favorites, movie];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save updated favorites to local storage
        console.log('Movie added to favorites:', movie); // Log the added movie
        return { 
          popupMessage: 'Movie added to favorites!', // message to display in the popup
          showPopup: true };
      } else {
        return { 
          popupMessage: 'Movie is already in favorites!', 
          showPopup: true };
      }
    });
  };

  render() {
    return (
      <>
        <div className="App">
          {/* Display the popup if showPopup is true */}
          {this.state.showPopup && (
            <Popup 
              message={this.state.popupMessage} 
              onClose={() => this.setState({ showPopup: false })} 
            />
          )}
          <section>
            <Navbar />
            <Routes>
              <Route path="/" element={<StreamList />} />
              <Route path="/movie" element={<Movie addToCart={this.addToCart} addToList={this.addToList} />} />
              <Route path='/searchResults' element={<SearchResults addToCart={this.addToCart} addToList={this.addToList} />} />
              <Route path="/lists" element={<Lists favorites={this.state.favorites} />} />
              <Route path="/cart" element={<Cart cart={this.state.cart} />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </section>
          {/* footer in black */}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;