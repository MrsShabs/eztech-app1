import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate
import Navbar from './Navbar';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import Movie from './pages/Movie.js'; 
import SearchResults from './pages/SearchResults.js';
import Lists from './pages/Lists.js';
import StreamList from './pages/StreamList.js';
import UserProfile from './pages/UserProfile.js';
import Support from './pages/Support.js';
import UserLogIn from './Components/UserLogIn'; 
import PaymentForm from './Components/PaymentForm.js';
import Footer from './Footer';
import Popup from './Popup'; 
import './App.css';
import './Navbar.css';
import './Footer.css';


function ProtectedRoute({children}) {
  // Check if the user is logged in
  const isLoggedIn = (localStorage.getItem('isLoggedIn')) || false;
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/userLogIn" />;
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], // no more use of user[] change to oauthUser 
      movies: [],
      results: [],
      favorites: [],
      cart: [],
      cardData: [],
      showPopup: '', // message to display in the popup for at to list
      popupMessage: '', // Add popupMessage to state
      isLoggedIn: false, // Add isLoggedIn state
      oauthUser: null, // Add oauthUser to state
    };
  }
  
  //local storage
  componentDidMount() {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || this.state.users;
    const savedCart = JSON.parse(localStorage.getItem('cart')) || this.state.cart;
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || this.state.favorites;
    const savedCardData = JSON.parse(localStorage.getItem('cardData')) || this.state.cardData;
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    const oauthUser = JSON.parse(localStorage.getItem('oauthUser')) || null;
    this.setState({ users: savedUsers, cart: savedCart, favorites: savedFavorites, isLoggedIn, oauthUser });
  }
  // function to handle login
  handleLogin = (oauthUser = null) => {
    this.setState({ isLoggedIn: true, oauthUser });
    localStorage.setItem('isLoggedIn', true);
    if (oauthUser) {
      localStorage.setItem('oauthUser', JSON.stringify(oauthUser));
    }
  };

   // function to handle logout
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    localStorage.setItem('isLoggedIn', false);
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
            <Routes>4
                <>
                  <Route path="/" element={<ProtectedRoute> <Movie addToCart={this.addToCart} addToList={this.addToList}/></ProtectedRoute>} />
                  <Route path="/movie" element={<ProtectedRoute> <Movie addToCart={this.addToCart} addToList={this.addToList}/></ProtectedRoute>} />
                  <Route path='/searchResults' element={<ProtectedRoute><SearchResults addToCart={this.addToCart} addToList={this.addToList} /></ProtectedRoute>} />
                  <Route path="/lists" element={<ProtectedRoute> <Lists favorites={this.state.favorites} /></ProtectedRoute>} />
                  <Route path="/cart" element={<ProtectedRoute><Cart cart={this.state.cart} cardData={this.state.cardData} /></ProtectedRoute>} />
                  <Route path="/userProfile" element={<ProtectedRoute><UserProfile /> </ProtectedRoute>}/>
                  <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
                  <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
                  <Route path="/paymentForm" element={<ProtectedRoute><PaymentForm cardData={this.state.cardData} /></ProtectedRoute>} />
                </>
              
              <Route path="/userLogIn" element={<UserLogIn onLogin={this.handleLogin} />} />
            </Routes>
            
          </section>
          {/* footer in black */}
          <Footer />
        </div>
      </>
    );
  }
} // class App


export default App;