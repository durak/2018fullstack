import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'


class App extends React.Component {

  render() {
    
    return (
      <div>
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />        
      </div>
    )
  }
}

export default App