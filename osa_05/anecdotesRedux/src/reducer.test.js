import deepFreeze from 'deep-freeze'
import reducer from './reducer'

describe('anecdote reducer', () => {
  const initialState = {

  }

  it('should return a proper initial state when called with undefined state', () => {
    const newState = reducer(undefined, { type: 'NOTHING' })
    expect(newState.length).toBe(6)
  })

  it('votes are registered to correct anecdote', () => {
    const initialState = reducer(undefined, { type: 'NOTHING' })
    const voteAnecdote = initialState[0]
    deepFreeze(initialState)
    deepFreeze(voteAnecdote)

    let newState = reducer(initialState, {type: 'VOTE', id: voteAnecdote.id})
    newState = reducer(newState, {type: 'VOTE', id: voteAnecdote.id})

    const voteAnecdoteAfter = newState.find((anecdote) => anecdote.id === voteAnecdote.id)
    
    expect(voteAnecdoteAfter).toEqual({
      content: voteAnecdote.content,
      id: voteAnecdote.id,
      votes: 2
    })
  })
})