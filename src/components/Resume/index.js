import React from 'react';
const resume = require('../../assets/docs/jlusa_resume.pdf')

function Resume() {
    return (
        <section id="resume" className="title about mx-5">
            <div className='d-flex'>
                <div className='flex-fill w-25'>
                    <h4>Languages</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>C</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className='flex-fill w-25'>
                    <h4>Web Services</h4>
                    <ul>
                        <li>Github</li>
                        <li>Amazon Web Services (AWS)</li>
                        <li>Heroku</li>
                    </ul>
                </div>
                <div className='flex-fill w-25'>
                    <h4>Databases</h4>
                    <ul>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex'>
                <div className='flex-fill w-25'>
                    <h4>Back-End Frameworks</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>APIs</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div className='flex-fill w-25'>
                    <h4>Front-End Frameworks</h4>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='flex-fill w-25'>
                    <h4>Operating Systems</h4>
                    <ul>
                        <li>Windows</li>
                        <li>Linux/Unix</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <a href={resume} download><button type="button" className="btn btn-outline-secondary btn-outline-light">Resume  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg></button></a>
            </div>
        </section>
    )
}

export default Resume;