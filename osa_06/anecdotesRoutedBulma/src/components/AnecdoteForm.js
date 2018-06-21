import React from 'react'

class AnecdoteForm extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
      <section className="section">
      <h2 className="title">Create a new anecdote</h2>
      </section>
      <section className="section">

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label has-text-white">anecdote</label>
            <div className="control">
              <input className="input" name='content' value={this.state.content} onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">author</label>
            <div className="control">
              <input className="input" name='author' value={this.state.author} onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">url for more info</label>
            <div className="control">
            <input className="input" name='info' value={this.state.info} onChange={this.handleChange} />
            </div>
          </div>



          <button className="button is-link">create</button>
          
        </form>
        </section>
      </div>  
    )

  }
}

export default AnecdoteForm