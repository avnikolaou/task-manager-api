import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import lodash from 'lodash';
import { getTasks} from '../actions';

class Tasks extends Component {
    componentWillMount() {
        // If not logged in and user navigates to Tasks page, should redirect them to Landing
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        const { user } = this.props.auth;
        const { tasks } = this.props.tasks;
        let content;

        if (!lodash.isEmpty(tasks)) {
            content = tasks.map((task) => {
                return (
                    <div key={task._id} className={'mx-2 my-4 col-lg-3 col-md-5 col-sm-12 text-center'}>
                        <div className={'card'} style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{task.description}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Status: {task.completed ? 'Completed' : 'Pending'}</li>
                            </ul>
                            <div className="card-body">
                                {task.completed ? <button className={'btn btn-warning mx-1 my-1'}>Pending!</button> : <button className={'btn btn-info mx-1 my-1'}>Complete</button>}
                                <button className={'btn btn-danger mx-1 my-1'}>Delete</button>
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            content = <div className={'text-center'}>Loading . . .</div>;
        }

        return (
            <div>
                <div className={'container mt-4'}>
                    <div className={'row'}>
                        <div className={'col-sm-12'}>
                            <h1 className={'text-center'}>Here are your tasks {user.name ? user.name.split(" ")[0] : ''}</h1>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4'}>
                    <div className={'row'}>
                        <div className={'d-flex flex-wrap justify-content-around'}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Tasks.propTypes = {
    auth: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    tasks: state.tasks

});

export default connect(mapStateToProps, { getTasks })(Tasks)
