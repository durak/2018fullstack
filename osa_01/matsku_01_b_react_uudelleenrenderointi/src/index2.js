import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)                    // pakollinen
    this.state = {                  // ei saa päivittää suoraan, setState => component responds by rerendering
      counter: 1                    // komponentin alkutila
    }
  }

  kasvataYhdella = () => {
    this.setState({counter: this.state.counter + 1})
  }

  nollaa = () => {
    this.setState({counter: 0})
  }

  asetaArvoon = (arvo) => () => this.setState({ counter: arvo })

  render () {
    console.log('renderöidään', this.state.counter)
    return (
      <div>
        <Display counter={this.state.counter} />

        <Button handleClick={this.asetaArvoon(this.state.counter + 1)} text="plus" />

        <Button handleClick={this.asetaArvoon(this.state.counter - 1)} text="miinus" />

        <Button handleClick={this.asetaArvoon(0)} text="zero" />
      </div>
    )
  }
}

const Display = ({ counter }) =>  <div>{counter}</div> 

const Button = ({handleClick, text}) => (<button onClick={handleClick}>
  {text}
</button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/* const App = (props) => {
  const { counter } = props
  return (
    <div>{counter.value}</div>
  )
}

const counter = {
  value: 1
}

const renderoi = () => {
  ReactDOM.render(
    <App counter={counter} />,
    document.getElementById('root')
  )
}

setInterval(() => {
  renderoi()
  counter.value += 1
}, 1000
) */