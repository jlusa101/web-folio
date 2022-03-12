import React from 'react';
const firstPro = require('../../assets/images/what-if-stock.jpg')
const bikeHaven = require('../../assets/images/bike_haven.jpg')
const exPro = require('../../assets/images/pro-1.jpg');
const exPro2 = require('../../assets/images/pro-2.jpg');
const exPro3 = require('../../assets/images/pro-3.jpg');
const exPro4 = require('../../assets/images/pro-4.jpg');

function Portfolio() {
    return(
        <section>
            <div className="card-deck mt-3 w-100 ml-0">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title"><a href="https://mikekhoury135.github.io/Project-1-Group-3/">What If Stock/Crypto</a></h4>
                    <p className="card-text">HTML/CSS/JavaScript <a href="https://github.com/mikekhoury135/Project-1-Group-3" target="_blank "><i className="fa fa-github "></i></a></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title"><a href="https://bike-haven.herokuapp.com/">Bike Haven</a></h4>
                    <p className="card-text">HTML/CSS/JavaScript/Node.js/Express.js <a href="https://github.com/arslan-razi/Bike-Haven" target="_blank "><i className="fa fa-github "></i></a></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title"><a href="https://jlusa101.github.io/password-generator/">Random Password Generator</a></h4>
                    <p className="card-text">HTML/CSS/JavaScript <a href="https://github.com/jlusa101/password-generator" target="_blank "><i className="fa fa-github "></i></a></p>
                    </div>
                </div>
            </div>
            <div className="card-deck mt-3 w-100 ml-0">
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title"><a href="https://jlusa101.github.io/run-buddy/">Run Buddy</a></h4>
                    <p className="card-text">HTML/CSS <a href="https://github.com/jlusa101/run-buddy" target="_blank "><i className="fa fa-github "></i></a></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title">README Generator</h4>
                    <p className="card-text">Node.js</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <h4 className="card-title"><a href="https://jlusa101.github.io/weather-dashboard/">Weather Dashboard</a></h4>
                    <p className="card-text">HTML/CSS/JavaScript/APIs <a href="https://github.com/jlusa101/weather-dashboard" target="_blank "><i className="fa fa-github "></i></a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;