import React from 'react';

function Header(props) {

    console.log(props);
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
                        <li className="nav-item ml-4"><a href="index.html">Home</a></li>
                        {navOptions.map((option) => (
                        <li
                        className={`nav-item ml-4 ${
                            currOption.name === option.name && `navActive`
                        }`}
                        key={option.name}
                        >
                        <span onClick={() => {
                        setCurrOption(option);
                        }}
                        >
                        {option.name}
                        </span>
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
};


export default Header;