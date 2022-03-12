import React from 'react';

const profPic = require('../../assets/images/avatar.png');

function About() {

    return (
        <section id="about" className="title about mx-5">
            <div className="d-flex">
                <div className="flex-fill flex-column w-50 bio">
                
                <div className="d-flex">
                    <div className="m-3">
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
                        <h4>Hobbies</h4>
                        <ul>
                            <li>I enjoy taking walks with my dog Bobo</li>
                            <li>Playing basketball</li>
                            <li>Watching horror movies/tv-shows</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="flex-fill flex-column">
                </div>
            </div>
        </section>
    )
};

export default About;