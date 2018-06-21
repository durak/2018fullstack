import React from 'react'

const Anecdote = ({ anecdote }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title has-text-black">
        "{`${anecdote.content}`}"
        </p>
        <p className="subtitle has-text-black">
          {`by ${anecdote.author}`}
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            {`has ${anecdote.votes} votes`}
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            for more info see <a href={anecdote.info} className="has-text-link">{anecdote.info.substring(0, 30)}</a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Anecdote
