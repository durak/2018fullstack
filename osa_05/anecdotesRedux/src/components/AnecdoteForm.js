import React from 'react'

class NoteForm extends React.Component {

  createAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    this.props.store.dispatch({ type: 'CREATE', content: content })
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

export default NoteForm