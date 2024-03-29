import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    
    const [errorMessage, setErrorMessage] = useState('');

    // Function that handles any changes inside the text areas in the contact form
    // If user leaves the text area blank, they will be notified
    function handleChange(e) {
         if(e.target.name === 'email'){
             
             // Validating user's email address
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
                return;
            } else {
                setErrorMessage('');
            }
         }

        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        } 
    };

    // Handles form submissions and sends myself an email from the user through a service called Form Spree 
    function handleSubmit(e) {

        e.preventDefault();
        var form = document.getElementById("my-form");
        var data = new FormData(e.target);

        // Ensuring that the user has filled in the required fields
        if(!e.target.name.value.length || !e.target.email.value.length || !e.target.subject.value.length || !e.target.message.value.length){
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Fetch request to the third party service provider that allows users to send the website owner messages
        fetch("https://formspree.io/f/xqknqkaw", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setErrorMessage("Thanks for your message!");
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        setErrorMessage(data["errors"].map(err => err["message"]).join(", "));
                    } else {
                        setErrorMessage("Oops! There was a problem sending your email");
                    }
                })
            }
        }).catch(err => {
            setErrorMessage("Oops! There was a problem sending your email");
        });

    };
  
    return (
        <section id="contact" className="title mx-5 mt-5">
            <div id="info" className="d-flex">
                <div className="flex-fill flex-column">
                    <h2>Contact Me</h2>
                    <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFF0" className="bi bi-pin-map" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                            <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                        </svg><span className="ml-3 mt-3">Kitchener, Ontario, Canada</span></p>
                    </div>
                    <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFF0" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                          </svg><span className="ml-3 mt-3">Email: joona.lusa@hotmail.com</span></p>
                    </div>
                </div>
                <div className="flex-fill flex-column">
                    <h2>Let's get in touch. Send me a message:</h2>
                    <form id="my-form" className="d-flex flex-column" onSubmit={handleSubmit}>
                        <label htmlFor="contact-name">Name</label>
                        <input type="text" name="name" id="contact-name" placeholder="John Smith" onBlur={handleChange} />

                        <label htmlFor="contact-email">Email</label>
                        <input type="text" name="email" id="contact-email" placeholder="john.smith@email.com" onBlur={handleChange} />

                        <label htmlFor="contact-subject">Subject</label>
                        <input type="text" id="contact-subject" name="subject" placeholder="Subject" onBlur={handleChange} />

                        <label htmlFor="contact-message">Message</label>
                        <textarea id="contact-message" name="message" placeholder="Message" onBlur={handleChange}></textarea>

                        <button id="send-btn" type="submit" className="btn btn-primary btn-sm mb-3 mt-3">Send</button>
                        {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;