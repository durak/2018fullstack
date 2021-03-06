import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)    
    this.state = {
      selected: 0,
      votes: new Array(props.anecdotes.length).fill(0)
    }
  }

  vote = () =>  {
    const votesUpd = [...this.state.votes]
    votesUpd[this.state.selected] += 1
    this.setState({votes: votesUpd})
  }

  randomizeAnecdote = () => {
    const nr = Math.floor(Math.random() * this.props.anecdotes.length)
    this.setState({selected: nr})
  }

  topVotes() {
    const top = Math.max(...this.state.votes)
    return this.state.votes.indexOf(top)
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <Votes number={this.state.votes[this.state.selected]} />
        <div>
          <Button handleClick={this.vote} text="vote" />
          <Button handleClick={this.randomizeAnecdote} text="next anecdote" />
        </div>
        <div>
        <p><b>most votes:</b></p>
        <p>{this.props.anecdotes[this.topVotes()]}</p>
        <Votes number={this.state.votes[this.topVotes()]} />
        </div>
      </div>
    )
  }
}

const Votes = ({number}) => <p>Has {number} votes</p>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)