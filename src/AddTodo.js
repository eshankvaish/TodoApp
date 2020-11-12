import React, { Component } from 'react';

//Component for adding new todo
class AddTodo extends Component {
    state = {
        content: '' //empty state
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: '' //changing the state to empty
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Add New Todo:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        );
    }
}

export default AddTodo;
