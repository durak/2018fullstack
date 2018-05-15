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

  goodReview = () => {
    this.setState((prevState) => ({good: prevState.good + 1 }))
  }

  neutralReview = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }))
  }

  badReview = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }))
  }

  render() {
    
    return (
      <div>
        <Heading text={Texts.heading} />
        <Button handleClick={this.goodReview} text={Texts.good} />
        <Button handleClick={this.neutralReview} text={Texts.neutral} />
        <Button handleClick={this.badReview} text={Texts.bad} />
        <Heading text={Texts.statistics_heading} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
    )
  }

}

const Heading = (props) => <h1>{props.text}</h1>

const Statistics = ({good, neutral, bad}) => {
  const average = () => {
    const sum = good * 1 +  bad * -1
    const count = good + neutral + bad
    return (sum / count).toFixed(2)
  }

  const positive = () => {
    const count = good + neutral + bad
    return (good / count * 100).toFixed(1)
  }

  return (
    <div>
      <Review text={Texts.good} value={good} />
      <Review text={Texts.neutral} value={neutral} />
      <Review text={Texts.bad} value={bad} />
      <Review text={Texts.average} value={average()} />
      <Review text={Texts.positive} value={positive()} />
    </div>
  )
}



const Review = ({text, value}) => <div>{text} {value}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(<App />, document.getElementById('root'));

