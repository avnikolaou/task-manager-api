import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import lodash from 'lodash';
import { loginUser, logoutUser } from "../actions";

class Header extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        localStorage.getItem("jwtToken");
        this.props.logoutUser();
        this.props.history.push("/");
    };

    renderContent() {
        switch (lodash.isEmpty(this.props.auth.user)) {
            case true:
                return [
                    <Link key={1} to={'/login'} className={"btn btn-info m-1 d-flex"}>Login</Link>,
                    <Link key={2} to={'/register'} className={"btn btn-info m-1 d-flex"}>Register</Link>
                    ];
            case false:
                return [
                    <li key={1} className="nav-item"><Link to={'/tasks'} className={"btn btn-info m-1 d-flex"}>Tasks</Link></li>,
                    <li key={2} className="nav-item"><button className={"btn btn-info m-1 d-flex"} onClick={this.onLogoutClick}>Logout {this.props.auth.user.name.split(" ")[0]}</button></li>
                ];
            default:
                return;
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
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser, logoutUser })(Header)
