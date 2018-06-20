import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Anecdote from './components/Anecdote'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { Menu, About, Footer } from './components/common'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    }
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ 
      anecdotes: this.state.anecdotes.concat(anecdote),
      notification: `a new anecdote ${anecdote.content} created!`
    })

    setTimeout(() => {
      this.setState({
        notification: ''
      })      
    },10000)
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div>
        <h1>Software anecdotes</h1>
        <Router>
          <div>
            <Menu />
            <Notification notification={this.state.notification} />
            <Route exact path="/" render={() =>
              <AnecdoteList anecdotes={this.state.anecdotes} />}
            />
            <Route exact path="/anecdotes/:id" render={({ match }) =>
              <Anecdote anecdote={this.anecdoteById(match.params.id)} />}
            />
            <Route path="/create" render={({history}) =>
              <AnecdoteForm history={history} addNew={this.addNew} />}
            />
            <Route path="/about" render={() =>
              <About />}
            />
                        
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
