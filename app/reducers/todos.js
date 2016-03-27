import * as types from '../actions/actionTypes'

const todoApp = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false
          }
        ]
      })
    case types.TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed
          }
        })
      })
    case types.DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })
    default:
      return state
  }
}

export default todoApp
