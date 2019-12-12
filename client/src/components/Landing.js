import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

export default Landing
