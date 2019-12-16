import React, { Component } from 'react'
import PropTypes from "prop-types";
import { registerUser } from '../actions/index';
import { connect } from 'react-redux';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            age: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If registered in and user navigates to Login page, should redirect them to tasks
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/tasks");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();

        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age
        };

        this.props.registerUser(userData);
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-offset-4 text-center">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">
                                    <h2 className="text-center">Register</h2>
                                    <div className="panel-body">
                                        <form autoComplete="off" className="form" onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name" className="sr-only">Name</label>
                                                <input className={"form-control"} onChange={this.onChange} value={this.state.name} type="text" id="name"  placeholder="Name"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email" className="sr-only">Email</label>
                                                <input className={"form-control"} onChange={this.onChange} value={this.state.email} type="email" id="email"  placeholder="somebody@example.com"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="age" className="sr-only">Age</label>
                                                <input className={"form-control"} onChange={this.onChange} value={this.state.age} type="text" id="age"  placeholder="Age"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password" className="sr-only">Password</label>
                                                <input className={"form-control"} onChange={this.onChange} value={this.state.password} type="password" id="password"  placeholder="Password"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                                                <input className={"form-control"} onChange={this.onChange} value={this.state.confirm_password} type="password" id="confirm_password" placeholder="Confirm Password"/>
                                            </div>

                                            <input name="submit" className="btn btn-lg btn-primary btn-block" value="Register" type="submit"/>
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

Register.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register)
