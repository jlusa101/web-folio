import React from 'react';

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm">
                <div class="container-fluid d-flex justify-content-start">
                    <ul class="nav navbar-nav menu">
                        <li class="nav-item ml-4"><a href="index.html">Home</a></li>
                        <li class="nav-item ml-4"><a href="/">About</a></li>
                        <li class="nav-item ml-4"><a href="/">Work</a></li>
                        <li class="nav-item ml-4"><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};


export default Header;