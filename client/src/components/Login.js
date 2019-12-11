import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'proptypes';
import { loginUser} from '../actions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
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
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-sm-12 my-5'}>
                            <h1 className={'text-center display-3'}>Login</h1>
                            <h2 className={'text-center display-5'}>You dont have an account? Register <Link to={'/register'}> here!</Link></h2>
                        </div>
                    </div>
                </div>

                <div className={'container'}>
                    <div className={'row justify-content-center'}>
                        <div className={'col-xs-12'}>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onChange={this.onChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input onChange={this.onChange} type="password" className="form-control" id="password" placeholder="Password"/>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
