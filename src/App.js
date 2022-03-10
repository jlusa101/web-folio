import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

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
      </div>
  )
}

export default App;
