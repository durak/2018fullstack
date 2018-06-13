const noteReducer = (state = [], action) => {

  switch (action.type) {
    case 'NEW_NOTE':
      // return state.concat(action.data)
      return [...state, action.data]

    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNot = { ...noteToChange, important: !noteToChange.impotant }
      return state.map(note => note.id !== id ? note : changedNot)

    default:
      return state
  }

}

export default noteReducer