import React, { Component } from 'react'

class Login extends Component {
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
                                        <form id="login-form" role="form" autoComplete="off" className="form"
                                              method="post">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-user color-blue"></i>
                                                    </span>
                                                    <input name="username" type="text" className="form-control" placeholder="Username"/>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-lock color-blue"></i>
                                                    </span>
                                                    <input name="password" type="password" className="form-control" placeholder="Password"/>
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

export default Login
