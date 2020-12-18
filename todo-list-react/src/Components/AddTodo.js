import React, { Component } from 'react'
import '../Css/AddTodo.css'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) =>
        this.setState({ title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.onSubmit}>
                    <input 
                        type = "text" 
                        name = "title" 
                        placeholder = "Add a title" 
                        className = "textInput"
                        value = {this.state.title}
                        onChange = {this.onChange}
                    />
                    <input 
                        type = "submit" 
                        value = "submit" 
                        className = "submitBtn"
                        onSubmit = {this.onSubmit}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
