import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render(){
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo = {todo} toggleComplete = {this.props.toggleComplete} deleteTodo = {this.props.deleteTodo}/>
    ));
  }
}

//Prop types
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;