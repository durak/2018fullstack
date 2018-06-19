import React from 'react'
import { connect } from 'react-redux'
import { noteCreation } from './../reducers/noteReducer'

class NoteForm extends React.Component {

  addNote = (event) => {
    event.preventDefault()
    this.props.noteCreation(event.target.note.value)

    event.target.note.value = ''
  }
  render() {
    return (
      <form onSubmit={this.addNote}>
        <input name="note" />
        <button>lisää</button>
      </form>
    )
  }
}



export default connect(
  null,
  { noteCreation }
)(NoteForm)