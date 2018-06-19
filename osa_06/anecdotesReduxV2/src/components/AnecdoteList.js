import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationSet, notificationDestroy } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  vote = (anecdote) => () => {
    this.props.store.dispatch(
      anecdoteVote(anecdote.id)
    )
    this.props.store.dispatch(
      notificationSet(`you voted ${anecdote.content}`)
    )
    setTimeout(() => {
      this.props.store.dispatch(notificationDestroy())
    }, 5000)

  }
  render() {
    let anecdotes = this.props.store.getState().anecdotes
    anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(this.props.store.getState().filter))

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
