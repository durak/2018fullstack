import React from 'react';


class App extends React.Component {

  handleVote = (id) => () => {
    this.props.store.dispatch({ type: 'VOTE', id: id })
  }

  createAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    this.props.store.dispatch({ type: 'CREATE', content: content })
    e.target.content.value = ''
  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleVote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.createAnecdote}>
          <div><input name="content" /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App