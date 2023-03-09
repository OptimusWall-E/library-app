import React from 'react';
import './App.css';
import { Homepage } from './Layouts/HomePage/Homepage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}
