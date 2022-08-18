import React from 'react'
import './NavBar.css'
// import UserIcon from '../../img/user-icon.png'
export default function NavBar() {
    return (
        <nav className="navbar sticky-top  navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a href="www.google.com" className="navbar-brand">Monkey-App</a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="www.google.com" className="nav-item nav-link disabled">Notes</a>
                        <a href="www.google.com" className="nav-item nav-link disabled">News</a>
                        <a href="www.google.com" className="nav-item nav-link disabled">Contacts</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <a href="www.google.com" className="nav-item nav-link log-out">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
