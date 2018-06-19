import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationSet, notificationDestroy } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  let anecdotes = props.anecdotes
  anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(props.filter))

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
            <button onClick={props.handleClick(anecdote)}>
                vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (anecdote) => () => {
      dispatch(anecdoteVote(anecdote.id))
      dispatch(notificationSet(`you voted ${anecdote.content}`))
      setTimeout(() => {
        dispatch(notificationDestroy())
      }, 5000)
    }
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)


export default ConnectedAnecdoteList
