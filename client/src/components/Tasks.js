import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class Tasks extends Component {
    componentWillMount() {
        // If not logged in and user navigates to Tasks page, should redirect them to Landing
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <div className={'container mt-4'}>
                    <div className={'row'}>
                        <div className={'col-sm-12'}>
                            <h1 className={'text-center'}>Welcome to Task Manager {user.name ? user.name.split(" ")[0] : ''}</h1>
                            <h2 className={'text-center'}></h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Tasks)
