import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About'
import Resume from './components/Resume'

function App() {

  const [navOptions] = useState([
    { name: 'About'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
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
        {/* {currOption === navOptions[0] ? <About /> : <LandingPage /> } */}
        {/* {currOption === navOptions[1] ? <Portfolio /> : <LandingPage /> } */}
        {/* {currOption === navOptions[2] ? <Contact /> : <LandingPage /> } */}
          {currOption === navOptions[0] ? <About /> : currOption === navOptions[1] ? <LandingPage /> : currOption === navOptions[2] ? <Contact /> : currOption === navOptions[3] ? <Resume /> : <LandingPage /> }
        </main>
        <Footer />
      </div>
  )
}

export default App;
