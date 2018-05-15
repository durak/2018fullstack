import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// tila: palautteiden lukumäärät
//Sovelluksen tulee näyttää jokaisen palautteen lukumäärä. Sovellus voi näyttää esim. seuraavalta:

const Texts = ({
  heading: "anna palautetta",
  statistics_heading: "statistiikka",
  good: "hyvä",
  neutral: "neutraali",
  bad: "huono",
  average: "keskiarvo",
  positive: "positiivisia"
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
    
  }

  review = (type) => {
    return () => this.setState(
      (prevState) => {
        let newState = {}
        newState[type] = prevState[type] + 1
        return newState        
      }
    )
  }

  render() {
    
    return (
      <div>
        <Heading text={Texts.heading} />
        <Button handleClick={this.review('good')} text={Texts.good} />
        <Button handleClick={this.review('neutral')} text={Texts.neutral} />
        <Button handleClick={this.review('bad')} text={Texts.bad} />
        <Heading text={Texts.statistics_heading} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
    )
  }

}

const Statistics = ({good, neutral, bad}) => {
  const count = good + neutral + bad

  const average = () => {
    const sum = good * 1 +  bad * -1
    return (sum / count).toFixed(2)
  }

  const positive = () => {    
    return (good / count * 100).toFixed(1)
  }

  if (count === 0) return <div>ei yhtään palautetta annettu</div>

  return (
    <div>
      <Statistic text={Texts.good} value={good} />
      <Statistic text={Texts.neutral} value={neutral} />
      <Statistic text={Texts.bad} value={bad} />
      <Statistic text={Texts.average} value={average()} />
      <Statistic text={Texts.positive} value={positive() + " %"} />
    </div>
  )
}

const Statistic = ({text, value}) => <div>{text} {value}</div>

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(<App />, document.getElementById('root'));

