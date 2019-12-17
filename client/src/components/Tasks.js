import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Button, Modal, Form} from 'react-bootstrap'
import lodash from 'lodash';
import { getTasks , deleteTask, updateTask, openModal, closeModal, addTask } from '../actions';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            completed: false
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            description: this.state.description,
            completed: this.state.completed
        };

        this.props.addTask(userData);
    };

    componentWillMount() {
        // If not logged in and user navigates to Tasks page, should redirect them to Landing
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    };

    onDeleteClick = (e) => {
        this.props.deleteTask(e.target.value);
    };

    onUpdateTaskClick = (e) => {
        if (e.target.innerHTML === 'Done') {
            return this.props.updateTask(e.target.value, { completed: true });
        }

        return this.props.updateTask(e.target.value, { completed: false });
    };

    openModal = () => {
        this.props.openModal();
    };

    closeModal = () => {
        this.props.closeModal();
    };

    render() {
        const { user } = this.props.auth;
        const { tasks } = this.props.tasks;
        const myModal = this.props.modal;
        let content;

        if (!lodash.isEmpty(tasks)) {
            content = tasks.map((task) => {
                return (
                    <div key={task._id} className={'mx-2 my-4 col-lg-3 col-md-5 col-sm-12 text-center'}>
                        <div className={'card'}>
                            <div className="card-body">
                                <h5 className="card-title">{task.description}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Status: {task.completed ? 'Completed' : 'Pending'}</li>
                            </ul>
                            <div className="card-body">
                                {task.completed ? <button className={'btn btn-warning mx-1 my-1'} value={task._id} onClick={this.onUpdateTaskClick}>Pending</button>
                                    : <button className={'btn btn-success mx-1 my-1'} value={task._id} onClick={this.onUpdateTaskClick}>Done</button>}
                                <button className={'btn btn-danger mx-1 my-1'} value={task._id} onClick={this.onDeleteClick}>Delete</button>
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            content = <h2 className={'text-center'}>It looks like you have no tasks scheduled...</h2>;
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
                    <div className={'row d-block text-center'}>
                        <div className={'col-sm-12'}>
                            <Button variant="primary" onClick={this.openModal}>Add task</Button>

                            <Modal show={myModal.openModal} animation={true} onHide={this.closeModal}>
                                <Form style={{padding: '20px'}} onSubmit={this.onSubmit}>
                                    <Form.Group>
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control onChange={this.onChange} value={this.state.email} id={'description'} type="text" placeholder="Enter your description" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4'}>
                    <div className={'row d-block'}>
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
    tasks: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    tasks: state.tasks,
    modal: state.modal
});

export default connect(mapStateToProps, { getTasks, deleteTask, updateTask, openModal, closeModal, addTask })(Tasks)
