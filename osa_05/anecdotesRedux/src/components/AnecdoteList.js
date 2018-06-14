import React from 'react'
import Anecdote from './Anecdote'


class AnecdoteList extends React.Component {

  handleVote = (id) => () => {
    this.props.store.dispatch({ type: 'VOTE', id: id })
  }

  render() {
    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={this.handleVote}
          />
        )}
      </div>
    )
  }
}

export default AnecdoteList