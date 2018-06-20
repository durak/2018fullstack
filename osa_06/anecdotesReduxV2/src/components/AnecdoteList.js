import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationSet, notificationDestroy, notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = (props) => {

  let anecdotes = props.anecdotesToShow

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
            <button onClick={props.handleClick(anecdote)}>
                vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes
    .filter(anecdote => anecdote.content.includes(filter))
    .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (anecdote) => async () => {
      
      dispatch(anecdoteVote(anecdote))
      dispatch(notify(`you voted ${anecdote.content}`))
      
      /* dispatch(notificationSet(`you voted ${anecdote.content}`))
      setTimeout(() => {
        dispatch(notificationDestroy())
      }, 5000) */
    }
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)


export default ConnectedAnecdoteList
