import React from 'react';
import './App.css';
import NavBar from './layouts/navbar-and-footers/navbar';
import Footer from './layouts/navbar-and-footers/Footer';
import Homepage from './layouts/Homepage/Homepage';
import SearchBooksPage from './layouts/SearchBooks/SearchBooksPage';

const App = () => {
  return (
    <div>
      <NavBar/>
      <SearchBooksPage/>
        {/* <Homepage/> */}
      <Footer/>
    </div>
    
  );
}

export default App;
