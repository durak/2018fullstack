import React from 'react'

const NoteForm = ({ handleSubmit, handleChangle, newNote }) => {
  return (
    <div>
      <h2>Luo uusi muistiinpano</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={newNote}
          onChange={handleChangle}
        />
        <button type="submit">tallenna</button>
      </form>

    </div>
  )
}

export default NoteForm