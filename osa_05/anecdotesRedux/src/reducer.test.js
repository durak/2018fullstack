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
    const firstAnecdote = initialState[0]
    deepFreeze(initialState)
    deepFreeze(firstAnecdote)

    let newState = reducer(initialState, {type: 'VOTE', id: firstAnecdote.id})
    newState = reducer(newState, {type: 'VOTE', id: firstAnecdote.id})
    
    expect(newState[0]).toEqual({
      content: firstAnecdote.content,
      id: firstAnecdote.id,
      votes: 2
    })
  })
})