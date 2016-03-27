import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import todoApp from '../reducers/todos'

let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configureStore (initialState = {todos: []}) {
  return finalCreateStore(todoApp, initialState)
}
