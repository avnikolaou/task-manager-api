import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../actions";

class Landing extends Component {
    render() {
        return (
            <div className={'container mt-4'}>
                <div className={'row'}>
                    <div className={'col-sm-12'}>
                        <h1 className={'text-center'}>Welcome to Task Manager!</h1>
                        <h2 className={'text-center'}>A useful app to organize your tasks with minimum effort!</h2>
                    </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Landing)
