import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <h1>{props.text}</h1>
)

const Sisalto = (props) => (
  <div>
    <Osa part={props.part1} tasks={props.tasks1} />
    <Osa part={props.part2} tasks={props.tasks2} />
    <Osa part={props.part3} tasks={props.tasks3} />
  </div>
)

const Yhteensa = (props) => (
  <p>yhteensä {props.total}</p>
)

const Osa = (props) => (
  <p>{props.part} {props.tasks}</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
  
  return (
    <div>
      <Otsikko text={kurssi} />
      <Sisalto part1={osa1.nimi} tasks1={osa1.tehtavia} part2={osa2.nimi} tasks2={osa2.tehtavia} part3={osa3.nimi} tasks3={osa3.tehtavia} />
      <Yhteensa total={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />    
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)