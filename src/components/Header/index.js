import React from 'react';

function Header(props) {

    const {
        navOptions = [],
        currOption,
        setCurrOption
    } = props;

    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid d-flex justify-content-start">
                <h3 className="mx-2"><a href="./index.html">Home</a></h3>
                    <ul className="nav navbar-nav menu">
                        {navOptions.map((option) => (
                        <li className={`mx-2 ${currOption.name === option.name && `navActive`}`}key={option.name}>
                            <span onClick={() => setCurrOption(option)}>{option.name}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
};


export default Header;