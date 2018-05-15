import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <h1>{props.text}</h1>
)

const Sisalto = (props) => (
  <div>
    <Osa part={props.parts[0]} />
    <Osa part={props.parts[1]} />
    <Osa part={props.parts[2]} />        
  </div>
)

const Yhteensa = (props) => (
  <p>yhteensä {props.parts[0].tehtavia + props.parts[1].tehtavia + props.parts[2].tehtavia}</p>
)

const Osa = (props) => (
  <p>{props.part.nimi} {props.part.tehtavia}</p>
)

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }
  
  return (
    <div>
      <Otsikko text={kurssi.nimi} />
      <Sisalto parts={kurssi.osat} />
      <Yhteensa parts={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)