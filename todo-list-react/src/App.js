import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTodo from './Components/AddTodo'
import Header from './Components/Layout/Header'
import TodoList from './Components/TodoList'
import About from './Components/Pages/About';
import {v5 as uuid} from 'uuid';


class App extends Component {
state = {
  todos: [
    {
      id: uuid.v5,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: uuid,
      title: 'Do some dumb shit',
      completed: false
    },
    {
      id: uuid,
      title: 'Go home',
      completed: false
    },
  ] 
}
 
toggleComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id)
    {
      todo.completed = !todo.completed;
    }
    return todo;
  })});
}

deleteTodo = (id) =>{
  this.setState({todos: [...this.state.todos.filter(todo => 
    todo.id !== id
  )]});
}

addTodo = (title) => {
  const newTodo = {
    id: uuid.v5,
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path = "/" render = {props => (
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
              <TodoList todos = {this.state.todos} toggleComplete = {this.toggleComplete} deleteTodo = {this.deleteTodo}/>
            </React.Fragment>
          )}></Route>
          <Route path = "/about" component = {About}/>
        </div>
      </Router>
    );
  }
}

export default App;
