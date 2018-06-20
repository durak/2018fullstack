import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (store = [], action) => {

  switch (action.type) {
    case 'VOTE': {
      const old = store.filter(a => a.id !== action.id)
      const voted = store.find(a => a.id === action.id)

      return [...old, { ...voted, votes: voted.votes + 1 }]
    }
    case 'CREATE':
      return [...store, action.data]
    case 'INIT':
      return (action.data)

    default:
      return store
  }
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content)

    dispatch({
      type: 'CREATE',
      data: anecdote
    })
  }
}

export const anecdoteVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'VOTE',
      id: updatedAnecdote.id
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(
      { type: 'INIT',
        data: anecdotes }
    )
  }
}

export default anecdoteReducer