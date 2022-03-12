import React from 'react';
const firstPro = require('../../assets/images/what-if-stock.jpg')

function Portfolio() {
    return(
        <section>
            <div className="d-flex m-3" id='projects'>
                <div class="card flex-fill ml-4">
                    <div class="card-body">
                        <p class="card-text">This image is in the middle</p>
                    </div>
                    <img src={firstPro} alt='first project' />
                    <div class="card-body">
                        <p class="card-text">of a card.</p>
                    </div>
                </div>
                <div class="card flex-fill ml-4">
                    <div class="card-body">
                        <p class="card-text">This image is in the middle</p>
                    </div>
                    <img src={firstPro} alt='first project' />
                    <div class="card-body">
                        <p class="card-text">of a card.</p>
                    </div>
                </div>
                <div class="card flex-fill ml-4">
                    <div class="card-body">
                        <p class="card-text">This image is in the middle</p>
                    </div>
                    <img src={firstPro} alt='first project' />
                    <div class="card-body">
                        <p class="card-text">of a card.</p>
                    </div>
                </div>
            </div>
            <div className="d-flex m-3" id='projects'>
                <div class="card flex-fill ml-4">
                    <div class="card-body">
                        <p class="card-text">This image is in the middle</p>
                    </div>
                    <img src={firstPro} alt='first project' />
                    <div class="card-body">
                        <p class="card-text">of a card.</p>
                    </div>
                </div>
                <div class="card flex-fill ml-4">
                    <div class="card-body">
                        <p class="card-text">This image is in the middle</p>
                    </div>
                    <img src={firstPro} alt='first project' />
                    <div class="card-body">
                        <p class="card-text">of a card.</p>
                    </div>
                </div>
                <div class="card flex-fill ml-4">
                    <div class="card-body">
                        <p class="card-text">This image is in the middle</p>
                    </div>
                    <img src={firstPro} alt='first project' />
                    <div class="card-body">
                        <p class="card-text">of a card.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;