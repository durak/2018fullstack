import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { importanceToggling } from './../reducers/noteReducer'
import Note from './Note'

class NoteList extends React.Component {

  // Ei tarvita, koska storeen liittyvät asiat tulevat taas propseina
  /*   componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

   componentWillUnmount() {
    this.unsubscribe()
  }
*/

// Ei tarvita, koska toggleImportance saadaan propsina ja connect hoitaa dispatchin
/*   toggleImportance = (id) => () => {
    this.context.store.dispatch(
      importanceToggling(id)
    )
  } */


  render() {

    return (
      <ul>
        {this.props.visibleNotes.map(note =>
          <Note
            key={note.id}
            note={note}
            handleClick={() => this.props.importanceToggling(note.id)}
          />
        )}
      </ul>
    )
  }
}

// Ei tarvita, koska store saadaan propseina eikä contextin kautta
/* NoteList.contextTypes = {
  store: PropTypes.object
} */

const notesToShow = (notes, filter) => {

  if (filter === 'ALL') {
    return notes
  }

  return filter === 'IMPORTANT'
    ? notes.filter(note => note.important)
    : notes.filter(note => !note.important)
}

const mapStateToProps = (state) => {
  return {
    visibleNotes: notesToShow(state.notes, state.filter)
  }
}

const ConnectedNoteList = connect(
  mapStateToProps,
  { importanceToggling }
)(NoteList)

export default ConnectedNoteList
