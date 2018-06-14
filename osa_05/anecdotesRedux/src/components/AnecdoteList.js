import React from 'react'
import Anecdote from './Anecdote'
import PropTypes from 'prop-types'


class AnecdoteList extends React.Component {

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleVote = (id) => () => {
    this.context.store.dispatch({ type: 'VOTE', id: id })
  }

  render() {
    const anecdotes = this.context.store.getState()

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

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList