import React from 'react'
import ReactDOM from 'react-dom'

const Osa = ({ nimi, tehtavia }) => <p>{nimi} {tehtavia}</p>

const Otsikko = ({text}) => <h1>{text}</h1>

const Sisalto = ({ kurssi }) => {
  const osat = kurssi.osat.map(
    osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)

  return (
    <div>{osat}</div>
  )
}

const Yhteensa = ({ kurssi }) => {
  const total = kurssi.osat.reduce((sum, osa) => sum + osa.tehtavia, 0)

  return (
    <p>yhteensä {total} tehtävää</p>
  )
}

const Kurssi = ({kurssi}) => {

  return (
    <div>
      <Otsikko text={kurssi.nimi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  )
}

const App = ({ kurssit }) => {

  return (
    <div>
      <Otsikko text="Opetusohjelma" />
      {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
    </div>
  )
}

const kurssit = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
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
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }
]


ReactDOM.render(
  <App kurssit={kurssit}/>,
  document.getElementById('root')
)