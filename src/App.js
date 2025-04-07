import React, { Component } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'; // Added useNavigate
import Navbar from './Navbar';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import Movie from './pages/Movie.js'; 
import SearchResults from './pages/SearchResults.js';
import Lists from './pages/Lists.js';
import StreamList from './pages/StreamList.js';
import UserProfile from './pages/UserProfile.js';
import Support from './pages/Support.js'; 
import PaymentForm from './Components/PaymentForm.js';
import Footer from './Footer';
import Popup from './Popup'; 
import Splash from './pages/Splash.js';
import './App.css';
import './Navbar.css';
import './Footer.css';
import Subscription from './pages/Subscription.js';

function ProtectedRoute({ children }) {
  const navigate = useNavigate(); 
  // Check if the user is logged in
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  if (isLoggedIn) {
    return children;// Redirect to subscription page if not logged in
  } else {
    return <Navigate to="/userLogIn" />; // Redirect to login page if not logged in
  }
}

// subscription model 
function SubscriptionRoute({ children }) {
  // Check if the user is subscribed
  const isSubscribedIn = JSON.parse(localStorage.getItem('subscription')) || false;
  if (isSubscribedIn) {
    return children; // Render children if subscribed
  } else {
    return <Navigate to="/subscription" />; // Redirect to subscription page if not subscribed
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], // no more use of user[] change to oauthUser ?
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
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    const oauthUser = JSON.parse(localStorage.getItem('oauthUser')) || null;
    this.setState({ users: savedUsers, cart: savedCart, favorites: savedFavorites, isLoggedIn, oauthUser });
  }
  // function to handle login
  handleLogin = (oauthUser = null) => {
    const navigate = useNavigate(); // Use navigate for routing
    this.setState({ isLoggedIn: true, oauthUser });
    localStorage.setItem('isLoggedIn', true);
    if (oauthUser) {
      localStorage.setItem('oauthUser', JSON.stringify(oauthUser));
      navigate('/subscription'); // Redirect to subscription page after login
    }
  };

   // function to handle logout
  handleLogout = () => {
    this.setState({ isLoggedIn: false, oauthUser: null }); // Clear oauthUser on logout
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('oauthUser');
    
  };

  // Function to add movie to the cart state
  addToCart = (movie) => {
    this.setState((prevState) => {
      if (!prevState.cart.some((cartMovie) => cartMovie.id === movie.id)) {
        const updatedCart = [...prevState.cart, movie];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('Movie added to cart:', movie);
        return { 
          cart: updatedCart, // Update cart state
          popupMessage: 'Movie added to cart!', 
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
      if (!prevState.favorites.some((favMovie) => favMovie.id === movie.id)) {
        const updatedFavorites = [...prevState.favorites, movie];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        console.log('Movie added to favorites:', movie);
        return { 
          favorites: updatedFavorites, // Update favorites state
          popupMessage: 'Movie added to favorites!', 
          showPopup: true 
        };
      } else {
        return { 
          popupMessage: 'Movie is already in favorites!', 
          showPopup: true 
        };
      }
    });
  };

   // delete movie from favorites
  deleteMovieFromFavorites = (movieToDelete) => {
    this.setState((prevState) => {
      const updatedFavorites = prevState.favorites.filter((movie) => movie.id !== movieToDelete.id);
      console.log('Movie deleted from favorites:', movieToDelete);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { favorites: updatedFavorites }; // Update favorites state
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
                <>
                  <Route path="/" element={<ProtectedRoute><SubscriptionRoute><StreamList addToCart={this.addToCart} addToList={this.addToList} /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/movie" element={<ProtectedRoute><SubscriptionRoute><Movie addToCart={this.addToCart} addToList={this.addToList} /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path='/searchResults' element={<ProtectedRoute><SubscriptionRoute><SearchResults addToCart={this.addToCart} addToList={this.addToList} /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/lists" element={<ProtectedRoute><SubscriptionRoute><Lists favorites={this.state.favorites} deleteMovieFromFavorites={this.deleteMovieFromFavorites} /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/cart" element={<ProtectedRoute><SubscriptionRoute><Cart cart={this.state.cart} cardData={this.state.cardData} /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/userProfile" element={<ProtectedRoute><SubscriptionRoute><UserProfile /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/about" element={<ProtectedRoute><SubscriptionRoute><About /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/support" element={<ProtectedRoute><SubscriptionRoute><Support /></SubscriptionRoute></ProtectedRoute>} />
                  <Route path="/paymentForm" element={<ProtectedRoute><SubscriptionRoute><PaymentForm cardData={this.state.cardData} /></SubscriptionRoute></ProtectedRoute>} />
                </>
              <Route path="/userLogIn" element={<Splash onLogin={this.handleLogin} />} />
              <Route path="/subscription" element={<Subscription />} />
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