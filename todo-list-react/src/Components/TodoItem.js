import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Css/TodoItem.css';

export class TodoItem extends Component {
    

    itemStyle = () => {
        return{ 
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px black solid',

            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div className = "container-fluid">
                 <div className = "row" style = {this.itemStyle()}>
                    <div className = "col-md-12"> 
                        <input id="inputCheck" type ="checkbox" onChange={this.props.toggleComplete.bind(this, id)}></input>
                        {title}
                        <button id="btnStyle" onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                    </div>
                </div>
            </div>
           
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
