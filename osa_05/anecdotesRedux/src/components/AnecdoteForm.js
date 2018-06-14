import React from 'react'
import PropTypes from 'prop-types'

class NoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  createAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    this.context.store.dispatch({ type: 'CREATE', content: content })
    e.target.content.value = ''
  }

  render() {

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.createAnecdote}>
          <div><input name="content" /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

NoteForm.contextTypes = {
  store: PropTypes.object
}

export default NoteForm