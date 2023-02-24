import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home.jsx';
import Main from './Components/Main/Main.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Main />
    <Footer/>
    </>
  )
}

export default App;
