import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './containers/TodoApp'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
