import React from 'react';

// Importing pictures
const profPic = require('../../assets/images/jlusa.jpg');
const secPicture = require('../../assets/images/jlusabobo.jpg');

function About() {

    return (
        <section id="about" className="about mx-5 mt-5">
            <div className="d-flex" id='contact'>
                <div className="flex-fill bio">
                    <div className="d-flex">
                        <div className="m-3 w-75">
                            <img src={profPic} className="img-thumbnail mt-4" alt="Joona Lusa" />
                        </div>
                        <div>
                            <h2>Some Things About Me</h2>
                            <p>
                            My name is Joona Lusa, and I am a full-stack developer in training attending University of Toronto to obtain my certificate. 
                            In addition, I possess a Software Engineering Technician diploma from Conestoga College. I currently reside in Kitchener, Ontario 
                            but enjoy travelling all over the world. Originally from Finland, I moved to British Columbia, Canada in 2008 with my immediate family. 
                            </p>
                            <p>
                            My interest in coding sparked in high school when I took my first computer programming course but was interrupted when I moved from British Columbia to Ontario. 
                            I didn’t pick up coding until years later when I had already graduated high school. After working in automotive and security industries, 
                            I decided to go back to school and start coding again. Since then, I’ve been continuously learning about new and evolving technologies that surround 
                            us everyday on the web. 
                            </p>
                            <div className='d-flex'>
                                <div className='w-50'>
                                    <h4>Hobbies</h4>
                                    <ul>
                                        <li>I enjoy taking walks with my dog Bobo</li>
                                        <li>Playing basketball</li>
                                        <li>Watching horror movies/tv-shows</li>
                                    </ul>
                                </div>
                                <div className='w-75 mr-4'>
                                    <img src={secPicture} className="img-thumbnail mt-4" alt="Joona Lusa with dog, Bobo" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;

