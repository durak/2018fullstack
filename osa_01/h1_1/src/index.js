import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <h1>{props.text}</h1>
)

const Sisalto = (props) => (
  <p>{props.part} {props.tasks}</p>
)

const Yhteensa = (props) => (
  <p>yhteensä {props.total}</p>
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
      <Sisalto part={osa1} tasks={tehtavia1} />
      <Sisalto part={osa2} tasks={tehtavia2} />
      <Sisalto part={osa3} tasks={tehtavia3} />
      <Yhteensa total={tehtavia1 + tehtavia2 + tehtavia3} />    
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)