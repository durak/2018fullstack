import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (
  
  <div>
    <section className="section">
    <h1 className="title">Quoted for Truth?</h1>
    </section>
    <section className="section">
    <div className="level">
    <div className="level-item has-text-centered">
    <table className="table is-hoverable is-fullwidth ">
    <tbody>

    
      {anecdotes.map(anecdote =>
        <tr key={anecdote.id}>
        <td>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>          
          </td>
          <td>
            {anecdote.votes} votes
          </td>
        </tr>
      )}
    </tbody>
    </table>
    </div>
    </div>
    </section>
  </div>
)

export default AnecdoteList