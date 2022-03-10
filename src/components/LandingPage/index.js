import React from 'react';

function LandingPage() {
    
    return (
        <section className="hero" id="header">
            <div className="d-flex justify-content-center">
                <p className="intro w-50">Hey there, my name is <span id ='my-name'>Joona Lusa</span> and I am a full - stack web developer</p>
            </div>
            <div className="d-flex justify-content-center">
                <a href="/" download><button type="button" className="btn btn-outline-secondary btn-outline-light">Resume  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg></button></a>
            </div>
        </section>
    )
}



export default LandingPage;