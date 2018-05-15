import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// tila: palautteiden lukumäärät
//Sovelluksen tulee näyttää jokaisen palautteen lukumäärä. Sovellus voi näyttää esim. seuraavalta:

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
    this.setState((prevState) => ({ good: prevState.good + 1 }))
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
        <Review text ={Texts.good} value={this.state.good} />
        <Review text ={Texts.neutral} value={this.state.neutral} />
        <Review text ={Texts.bad} value={this.state.bad} />
      </div>
    )
  }

}

const Texts = ({
  heading: "anna palautetta",
  statistics_heading: "statistiikka",
  good: "hyvä",
  neutral: "neutraali",
  bad: "huono"
})

const Heading = (props) => <h1>{props.text}</h1>

const Review = ({text, value}) => <div>{text} {value}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(<App />, document.getElementById('root'));

