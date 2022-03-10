import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

function App() {

  const [navOptions] = useState([
    { name: 'About'},
    { name: 'Work'},
    { name: 'Contact'}
  ]);

  const [currOption, setCurrOption] = useState(navOptions[0]);

  return (
      <div>
        <Header
          navOptions = {navOptions}
          currOption = {currOption}
          setNavSelected = {setCurrOption}
        />
        <main>
          <LandingPage />
        </main>
      </div>
  )
}

export default App;
