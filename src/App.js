import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'buy some milk'
      },
      {
        id: 2,
        content: 'play PUBG'
      },
      {
        id: 3,
        content: 'Learn React'
      }
    ],
    idCounter: 3 //for id
  };

  //for deleting existing todo using id
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      //todos: todos Same as
      todos
    })
  }
  //for adding a new todo
  addTodo = (todo) => {
    let idCounter = this.state.idCounter + 1;
    todo.id = idCounter;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos, idCounter
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Your Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
