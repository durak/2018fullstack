import React from 'react'
import ReactDOM from 'react-dom'

const Osa = ({nimi, tehtavia}) => <p>{nimi} {tehtavia}</p>

const Otsikko = ({text}) => <h1>{text}</h1>

const Sisalto = ({ kurssi }) => {
  const osat = kurssi.osat.map(
    osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)

  return (
    <div>{osat}</div>
  )
}

const Kurssi = ({kurssi}) => {

  return (
    <div>
      <Otsikko text={kurssi.nimi} />
      <Sisalto kurssi={kurssi} />
    </div>
  )
}

const App = ({kurssi}) => {

  return (
    <div>
      <Kurssi kurssi={kurssi} />

    </div>
  )
}

const kurssi = {
  nimi: 'Half Stack -sovelluskehitys',
  osat: [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10,
      id: 1
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7,
      id: 2
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14,
      id: 3
    },
    {
      nimi: 'uusi osa',
      tehtavia: 1,
      id: 4
    }
  ]
}

ReactDOM.render(
  <App kurssi={kurssi}/>,
  document.getElementById('root')
)