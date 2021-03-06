import React from 'react'
import { connect } from 'react-redux'
import { noteCreation } from './../reducers/noteReducer'
import noteService from '../services/notes'


class NoteForm extends React.Component {

  addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    this.props.noteCreation(content)
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