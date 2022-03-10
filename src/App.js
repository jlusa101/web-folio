import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index';
import LandingPage from './components/LandingPage/index';
import Footer from './components/Footer/index';

function App() {

  const [navOptions] = useState([
    { name: 'About'},
    { name: 'Portfolio'},
    { name: 'Contact'}
  ]);

  const [currOption, setCurrOption] = useState(false);

  return (
      <div>
        <Header
          navOptions = {navOptions}
          currOption = {currOption}
          setCurrOption = {setCurrOption}
        />
        <main>
          <LandingPage />
        </main>
        <Footer />
      </div>
  )
}

export default App;
