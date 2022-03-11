import React from 'react';

function Contact() {

    // Handles form submissions and sends myself an email from the user through a service called Form Spree 
    function handleSubmit(e) {

        var form = document.getElementById("my-form");
        e.preventDefault();
        var status = document.getElementById("form-status");
        var data = new FormData(e.target);
        fetch("https://formspree.io/f/xqknqkaw", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your message!";
                form.reset();
            }})
            .catch(err => {
            status.innerHTML = "Oops! There was a problem sending your email";
        });

    };
  
    return (
        <section id="contact" className="title mx-5">
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
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFF0" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg><span className="ml-3 mt-3">Phone: +1 519-722-8739</span></p>
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
                        <label for="contact-name">Name</label>
                        <input type="text" name="name" id="contact-name" placeholder="John Smith" />

                        <label for="contact-email">Email</label>
                        <input type="email" name="email" id="contact-email" placeholder="john.smith@email.com" />

                        <label for="contact-subject">Subject</label>
                        <input type="text" id="contact-subject" name="subject" placeholder="Subject" />

                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" name="message" placeholder="Message"></textarea>

                        <button id="send-btn" type="submit" className="btn btn-primary btn-sm mb-3 mt-3">Send</button>
                        <p id="form-status"></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;