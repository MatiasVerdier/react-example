import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreators'

class TodoApp extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <h1>Todo app</h1>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList todos={this.props.todos} {...this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
