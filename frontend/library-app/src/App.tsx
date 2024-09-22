import React from 'react';
import './App.css';
import NavBar from './layouts/navbar-and-footers/navbar';
import Footer from './layouts/navbar-and-footers/Footer';
import Homepage from './layouts/Homepage/Homepage';

const App = () => {
  return (
    <div>
      <NavBar/>
        <Homepage/>
      <Footer/>
    </div>
    
  );
}

export default App;
