import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'unimportant' : 'important'
  return (
    <div className="wrapper">
      <div className="content">

        <li className="note">
          {note.content}
          <button onClick={toggleImportance}>{label} </button>
        </li>
      </div>
    </div>
  )
}

export default Note