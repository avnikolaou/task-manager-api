import React, { Component } from 'react'
import PropTypes from "prop-types";
import { loginUser, getTasks } from '../actions/index';
import { connect } from 'react-redux';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to tasks
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/tasks");
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/tasks');
            this.props.getTasks();
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-offset-4 text-center">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">
                                    <h2 className="text-center">Login</h2>
                                    <div className="panel-body">
                                        <form autoComplete="off" className="form" onSubmit={this.onSubmit}
                                              method="post">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-user color-blue"></i>
                                                    </span>
                                                    <input className={'form-control'} onChange={this.onChange} value={this.state.email} id={'email'} type={'email'} placeholder={'Email'}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-lock color-blue"></i>
                                                    </span>
                                                    <input className={'form-control'} onChange={this.onChange} value={this.state.password} id={'password'} type={'password'} placeholder={'Password'}/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input name="login" className="btn btn-lg btn-primary btn-block" value="Login" type="submit"/>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, getTasks })(Login)
