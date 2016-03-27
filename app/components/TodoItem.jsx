import React, { Component } from 'react'

class TodoItem extends Component {
  render () {
    return (
      <li key={this.props.key}>
        <span onClick={this.handleToggle.bind(this)} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
          {this.props.text}
        </span>
        <button onClick={this.handleDelete.bind(this)}>x</button>
      </li>
    )
  }

  handleToggle (event) {
    this.props.toggleTodo(this.props.id)
  }

  handleDelete (event) {
    this.props.deleteTodo(this.props.id)
  }
}

export default TodoItem
