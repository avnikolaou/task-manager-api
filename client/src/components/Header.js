import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { loginUser, logoutUser } from "../actions";

class Header extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        localStorage.getItem("jwtToken");
        this.props.logoutUser();
    };

    renderContent() {
        switch (this.props.auth.isAuthenticated) {
            case null:
                return;
            case false:
                return <Link to={'/login'} className={"btn btn-info m-1 d-flex"}>Login</Link>;
            case true:
                return <button className={"btn btn-info m-1 d-flex"} onClick={this.onLogoutClick}>Logout {this.props.auth.name}</button>;
        }
    }


    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">Task Manager</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {this.renderContent()}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser, logoutUser })(Header)
