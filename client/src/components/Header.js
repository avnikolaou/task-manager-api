import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className={"nav navbar navbar-expand-sm navbar-dark bg-dark"}>
                    <div className={"container"}>
                        <Link to={'/'} className={"navbar-brand"}>Task Manager</Link>
                        <button className={"navbar-toggler"} data-toggle={"collapse"} data-target={"#navbarCollapse"}>
                            <span className={"navbar-toggler-icon"}></span>
                        </button>
                        <div id={"navbarCollapse"} className={"collapse navbar-collapse"}>
                            <ul className={"navbar-nav ml-auto"}>
                                <Link to={"/login"} className={"btn btn-info m-1 d-flex"}>Login</Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header
