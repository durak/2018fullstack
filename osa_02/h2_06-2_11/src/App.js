import React from 'react';
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            search: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/persons')
        .then(response => {
            this.setState({persons: response.data})
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
            alert('Henkilö on jo luettelossa!')
        } else {
            const persons = this.state.persons.concat(person)
            this.setState({
                persons, newName: '', newNumber: '', search: ''
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Searchbar search={this.state.search} handleChange={this.handleChange} />
                <h2>Lisää uusi</h2>
                <ContactForm
                    addContact={this.addContact}
                    newName={this.state.newName}
                    handleChange={this.handleChange}
                    newNumber={this.state.newNumber}
                />
                <h2>Numerot</h2>
                <ContactDirectory persons={this.state.persons} search={this.state.search} />
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

const ContactDirectory = ({ persons, search }) => {
    const filteredContacts = persons.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <table>
                <tbody>
                    {filteredContacts.map(person => <Contact key={person.name} person={person} />)}
                </tbody>
            </table>
        </div>
    )
}

const Contact = ({ person }) => {
    return (
        <tr><td>{person.name}</td><td>{person.number}</td></tr>
    )
}

export default App