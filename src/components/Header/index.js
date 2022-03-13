import React from 'react';

function Header(props) {

    // Retrieving props
    const {
        navOptions = [],
        currOption,
        setCurrOption
    } = props;

    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid d-flex justify-content-start">
                    <ul className="nav navbar-nav menu">
                        <li className="mx-2"><a href="./index.html">Home</a></li>
                        {navOptions.map((option) => (
                        <li className={`mx-2 nav-item ${currOption.name === option.name && `navActive`}`}key={option.name}>
                            <a href="#!"><span onClick={() => setCurrOption(option)}>{option.name}</span></a>
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};


export default Header;