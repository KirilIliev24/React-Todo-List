import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTodo from './Components/AddTodo'
import Header from './Components/Layout/Header'
import TodoList from './Components/TodoList'
import About from './Components/Pages/About';
// import {v5 as uuid} from 'uuid';
import axios from 'axios';

class App extends Component {
state = {
  todos: [] 
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}));
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
  axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res =>  this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id
    )]}));
}

addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', 
    {
      title: title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
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
