import React from 'react'

const Kurssi = ({kurssi}) => {

    return (
      <div>
        <Otsikko text={kurssi.nimi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
      </div>
    )
  }

  const Otsikko = ({text}) => <h1>{text}</h1>

  const Sisalto = ({ kurssi }) => {
    const osat = kurssi.osat.map(
      osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
  
    return (
      <div>{osat}</div>
    )
  }

  const Osa = ({ nimi, tehtavia }) => <p>{nimi} {tehtavia}</p>

  const Yhteensa = ({ kurssi }) => {
    const total = kurssi.osat.reduce((sum, osa) => sum + osa.tehtavia, 0)
  
    return (
      <p>yhteensä {total} tehtävää</p>
    )
  }

  export default Kurssi