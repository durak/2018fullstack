import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notificationSet, notificationDestroy } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={props.handleSubmit}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: async (e) => {
      e.preventDefault()
      const content = e.target.anecdote.value
      e.target.anecdote.value = ''

      dispatch(anecdoteCreation(content))
      dispatch(notificationSet(`you created ${content}`))

      setTimeout(() => {
        dispatch(notificationDestroy())
      }, 5000)

    }
  }
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
