import React from 'react';
import personService from './services/persons'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            search: '',
            error: null,
            message: null
        }
    }

    componentDidMount() {
        personService
            .getAll()
            .then(persons => {
                this.setState({ persons})

            })
    }

    uniqueName(name) {
        const names = this.state.persons.map(person => person.name)
        return !names.includes(name)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addContact = (event) => {
        event.preventDefault()
        const person = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        if (!this.uniqueName(person.name)) {
            this.updateContact(person)
        } else {
            personService
                .create(person)
                .then(person => {
                    const persons = this.state.persons.concat(person)
                    this.setState({
                        persons, newName: '', newNumber: '', search: ''
                    })
                    this.userMessage(`Kontakti ${person.name} lisätty.`, 'message')
                })
                    
        }
    }

    deleteContact = (id) => {
        return () => {            
            if (this.userConfirmation('poistetaanko kontakti?')) {
                personService
                    .destroy(id)
                    .then(id => {
                        const persons = this.state.persons.filter(person => person.id !== id)
                        this.setState({ persons })
                        this.userMessage(`Kontakti poistettu.`, 'message')
                    })
            }
        }
    }

    updateContact = (updatedPerson) => {
        let id = this.state.persons.find(person => person.name === updatedPerson.name).id
        if (this.userConfirmation(
            `${updatedPerson.name} on jo luettelossa, korvataanko numero?`)) {
            personService
                .update(id, updatedPerson)
                .then(updatedPerson => {
                    this.setState({
                        persons: this.state.persons.map(person => person.id !== id ? person : updatedPerson)
                    })
                    this.userMessage(`Kontaktin ${updatedPerson.name} numero ${updatedPerson.number} päivitetty.`, 'message')
                })
                .catch(error => {
                    const persons = this.state.persons.filter(person => person.id !== id)
                    this.setState({ persons })
                    this.userMessage(`Kontakti ${updatedPerson.name} on jo poistettu palvelimelta.`, 'error')
                })
        }
    }

    userConfirmation(message) {
        return window.confirm(message)
    }

    userMessage(message, type) {
        this.setState({ [type]: message })
        setTimeout(() => { this.setState({ [type]: null }) }, 5000)
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Notification message={this.state.error} type="error" />
                <Notification message={this.state.message} type ="message" />
                <Searchbar search={this.state.search} handleChange={this.handleChange} />
                <h2>Lisää uusi</h2>
                <ContactForm
                    addContact={this.addContact}
                    newName={this.state.newName}
                    handleChange={this.handleChange}
                    newNumber={this.state.newNumber}
                />
                <h2>Numerot</h2>
                <ContactDirectory persons={this.state.persons} search={this.state.search} deleteContact={this.deleteContact} />
            </div>
        )
    }
}

const Searchbar = ({ search, handleChange }) => {
    return (
        <div>
            haku: <input name="search" value={search} onChange={handleChange} />
        </div>)
}

const ContactForm = ({ addContact, newName, handleChange, newNumber }) => {
    return (
        <div>
            <form onSubmit={addContact}>
                <div>
                    nimi: <input name="newName" value={newName} onChange={handleChange} />
                </div>
                <div>
                    numero: <input name="newNumber" value={newNumber} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

const ContactDirectory = ({ persons, search, deleteContact }) => {
    const filteredContacts = persons.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <table>
                <tbody>
                    {filteredContacts.map(person => <Contact key={person.name} person={person} deleteContact={deleteContact} />)}
                </tbody>
            </table>
        </div>
    )
}

const Contact = ({ person, deleteContact }) => {
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={deleteContact(person.id)}>Poista</button></td>
        </tr>
    )
}

const Notification = ({ message, type }) => {
    if (message === null) return null
    return (
        <div className={type}>
            {message}
        </div>
    )
}

export default App