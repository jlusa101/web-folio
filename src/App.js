import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index';
import LandingPage from './components/LandingPage/index';
import Footer from './components/Footer/index';
import Contact from './components/Contact';

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
        {/* {currOption === navOptions[0] ? <About /> : <LandingPage /> }
        {currOption === navOptions[1] ? <Portfolio /> : <LandingPage /> } */}
        {currOption === navOptions[2] ? <Contact /> : <LandingPage /> }
        </main>
        <Footer />
      </div>
  )
}

export default App;
