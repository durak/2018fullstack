import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './counterReducer'
import Statistics from './components/Statistics'

const store = createStore(counterReducer)

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({type: nappi})

  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistics store={store} handleClick={this.klik('ZERO')} />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render()
store.subscribe(render)
