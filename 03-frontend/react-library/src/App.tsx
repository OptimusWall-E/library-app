import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './Layouts/HomePage/ExploreTopBooks';
import { Carousel } from './Layouts/HomePage/Carousel';
import { Heroes } from './Layouts/HomePage/Heroes';
import { LibraryServices } from './Layouts/HomePage/LibraryServices';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heroes/>
      <LibraryServices/>
    </div>
  );
}

export default App;
