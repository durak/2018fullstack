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
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  
  return (
    <div>
      <Otsikko text={kurssi} />
      <Sisalto part1={osa1} tasks1={tehtavia1} part2={osa2} tasks2={tehtavia2} part3={osa3} tasks3={tehtavia3} />
      <Yhteensa total={tehtavia1 + tehtavia2 + tehtavia3} />    
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)