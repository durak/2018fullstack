import React from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'
import { createStore } from 'redux'

//////////////////////////////////////////////////////////////////////////////////////////////






// const store = createStore(noteReducer)

//////////////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: 'uusi muistiinpano',
      showAll: true,
      error: null,
      username: '',
      password: '',
      user: null
    }

  }

  componentDidMount() {
    console.log('will mount')

    noteService
      .getAll()
      .then(response => {
        this.setState({ notes: response })
      })

    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      noteService.setToken(user.token)
    }
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  addNote = (event) => {
    event.preventDefault()
    this.noteForm.toggleVisibility()

    const noteObject = {
      content: this.state.newNote,
      date: new Date().new,
      important: Math.random() > 0.5
    }

    // korvataan uudella
    noteService
      .create(noteObject)
      .then(newNote => {
        this.setState({
          notes: this.state.notes.concat(newNote),
          newNote: ''
        })
      })

  }

  toggleImportanceOf = (id) => () => {
    const note = this.state.notes.find(n => n.id === id)        // taulukon find-metodin käyttö
    const changedNote = { ...note, important: !note.important } //kopioidaan uuteen olioon ja muutetaan important

    noteService
      .update(id, changedNote)
      .then(changedNote => {
        const notes = this.state.notes.filter(n => n.id !== id)
        this.setState({
          notes: notes.concat(changedNote)
        })
      })
      .catch(error => {
        this.setState({
          error: `muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`,
          notes: this.state.notes.filter(n => n.id !== id)
        })
        setTimeout(() => {
          this.setState({ error: null })
        }, 2000)
      })
  }

  login = async (e) => {
    e.preventDefault()
    console.log('login in with', this.state.username, this.state.password)
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      noteService.setToken(user.token)
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen'
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }


  handleNoteChange = (event) => {
    this.setState({ newNote: event.target.value })
  }

  handleLoginFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const notesToShow =
      this.state.showAll ?
        this.state.notes :
        this.state.notes.filter(note => note.important === true)

    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'

    /*
    component => this.noteForm = componente
      - kun Toggleable render
      - React suorittaa function
        - parametri component saa arvokseen viitteen komponenttiin
        - funktio tallettaa viitteen App.noteForm kenttään
          -> kaikkialta Appista voi viitata muistiinpanojen Toggleable komponettiin
          -> kutsutaan togglevisibility
    */
    return (
      <div>
        <h1>Muistiinpanot</h1>

        <Notification message={this.state.error} />

        {this.state.user === null ?
          <Togglable buttonLabel="Log in">
            <LoginForm
              handleSubmit={this.login}
              handleChange={this.handleLoginFieldChange}
              username={this.state.username}
              password={this.state.password}
            />
          </Togglable>
          :
          <div>
            <p>{this.state.user.name} logged in</p>
            <Togglable buttonLabel="new note"
              ref={component => this.noteForm = component}>

              <NoteForm
                handleSubmit={this.addNote}
                handleChangle={this.handleNoteChange}
                newNote={this.state.newNote}
              />
            </Togglable>
          </div>
        }

        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>

        <ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} toggleImportance={this.toggleImportanceOf(note.id)}
            />)}
        </ul>

      </div>
    )
  }
}

export default App