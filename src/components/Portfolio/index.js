import React from 'react';

// Importing images
const whatIf = require('../../assets/images/what-if-stock.jpg')
const bikeHaven = require('../../assets/images/bike_haven.jpg')
const generatePassword = require('../../assets/images/genePass.jpg');
const missionPossible = require('../../assets/images/mission-possible.jpg');
const timedQuiz = require('../../assets/images/timedQuiz.jpg');
const weatherDashboard = require('../../assets/images/weatherDash.jpg');

function Portfolio() {
    return(
        <section id='portfolio'>
            <div className="card-deck mt-3 w-100 ml-0">
                <div className="card">
                    <div className="card-body">
                        <div className='card-banner'>
                            <h4 className="card-title"><a href="https://mikekhoury135.github.io/Project-1-Group-3/" target="_blank ">What If Stock/Crypto</a></h4>
                            <p className="card-text">HTML/CSS/JavaScript <a href="https://github.com/mikekhoury135/Project-1-Group-3" target="_blank "><i className="fa fa-github "></i></a></p>
                        </div>
                        <img src={whatIf} className='card-img' alt='what if web application' />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='card-banner'>
                            <h4 className="card-title"><a href="https://bike-haven.herokuapp.com/" target="_blank ">Bike Haven</a></h4>
                            <p className="card-text">HTML/CSS/JavaScript/Node.js/Express.js <a href="https://github.com/arslan-razi/Bike-Haven" target="_blank "><i className="fa fa-github "></i></a></p>
                        </div>
                        <img src={bikeHaven} className='card-img' alt='bike haven web application' />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='card-banner'>
                            <h4 className="card-title"><a href="https://glacial-cliffs-90348.herokuapp.com/" target="_blank ">Mission Possible</a></h4>
                            <p className="card-text">MERN <a href="https://github.com/Fabscg/group-3-project" target="_blank "><i className="fa fa-github "></i></a></p>
                        </div>
                        <img src={missionPossible} className='card-img' alt='Mission Possible charity web site' />
                    </div>
                </div>
            </div>
            <div className="card-deck mt-3 w-100 ml-0">
                <div className="card">
                    <div className="card-body">
                        <div className='card-banner'>
                            <h4 className="card-title"><a href="https://jlusa101.github.io/password-generator/" target="_blank ">Random Password Generator</a></h4>
                            <p className="card-text">HTML/CSS <a href="https://github.com/jlusa101/password-generator" target="_blank "><i className="fa fa-github "></i></a></p>
                        </div>
                        <img src={generatePassword} className='card-img' alt='generate a secure password application' />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='card-banner'>
                            <h4 className="card-title"><a href="https://jlusa101.github.io/timed-quiz/" target="_blank ">Timed Quiz</a></h4>
                            <p className="card-text">HTML/CSS/JavaScript <a href="https://github.com/jlusa101/timed-quiz" target="_blank "><i className="fa fa-github "></i></a></p>
                        </div>
                        <img src={timedQuiz} className='card-img' alt='timed javascript quiz web application' />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='card-banner'>
                            <h4 className="card-title"><a href="https://jlusa101.github.io/weather-dashboard/" target="_blank ">Weather Dashboard</a></h4>
                            <p className="card-text">HTML/CSS/JavaScript <a href="https://github.com/jlusa101/weather-dashboard" target="_blank "><i className="fa fa-github "></i></a></p>
                        </div>
                        <img src={weatherDashboard} className='card-img' alt='weather dashboard web application' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;