import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">Task Manager</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/login" className="nav-link">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header
