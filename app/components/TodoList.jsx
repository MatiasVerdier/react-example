import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render () {
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {
            this.props.todos.map((todo) => {
              return <TodoItem key={todo.id} {...todo} toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList
