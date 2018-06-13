import React from 'react'

const Statistics = ({ store, handleClick }) => {
  const state = store.getState()

  const count = state.good + state.ok + state.bad

  if (count === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  const average = (() => {
    const avg = (state.good * 1 + state.bad * -1) / count
    return avg.toFixed(1)
  })()

  const goodPct = (() => {
    const pct = state.good / count * 100
    return pct.toFixed(0) + ' %'
  })()

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{state.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{state.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{state.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{goodPct}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleClick}>nollaa tilasto</button>
    </div >
  )
}

export default Statistics