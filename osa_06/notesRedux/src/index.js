import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer, { noteInitialization } from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import noteService from './services/notes'


const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

console.log(store.getState())

/* noteService.getAll().then(notes =>

  store.dispatch(noteInitialization(notes))
) */


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)