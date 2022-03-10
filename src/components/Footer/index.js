import React from 'react';

function Footer() {

    return (
        <footer>
            <nav className="navbar navbar-expand-sm fixed-bottom ">
                <div className="container-fluid d-flex justify-content-center ">
                    <ul className="nav navbar-nav ">
                        <li className="nav-item ml-4 "><a href="https://www.facebook.com/joona.lusa " target="_blank "><i className="fa fa-facebook "></i></a></li>
                        <li className="nav-item ml-4 "><a href="https://www.linkedin.com/in/joona-lusa-b5436b211/ " target="_blank "><i className="fa fa-linkedin "></i></a></li>
                        <li className="nav-item ml-4 "><a href="https://github.com/jlusa101 " target="_blank "><i className="fa fa-github "></i></a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
};


export default Footer;