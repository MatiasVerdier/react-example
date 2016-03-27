import React, { Component } from 'react'

export default class TodoInput extends Component {
  render () {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <div>
          <input ref={(node) => {
            this.input = node
          }} />
          <input type='submit' value='Add todo' />
        </div>
      </form>
    )
  }

  _handleSubmit (event) {
    event.preventDefault()
    this.props.addTodo(this.input.value)
    this.input.value = ''
  }
}

export default TodoInput
