import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''                   // lomakkeen kentän kontroillointi
        }
    }

    handleInputNameChange = (event) => {
        this.setState({
            newName: event.target.value
        })
    }

    uniqueName(name) {
        const names = this.state.persons.map(person => person.name)        
        return !names.includes(name)
    }

    addPerson = (event) => {
        event.preventDefault()
        const person = {
            name: this.state.newName
        }
        if (!this.uniqueName(person.name)) {
            alert('Henkilö on jo luettelossa!')
        } else {
            const persons = this.state.persons.concat(person)
            this.setState({
                persons, newName: ''
            })
        }
    }    

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <ContactForm
                    newContactHandler={this.addPerson}
                    newName={this.state.newName}
                    inputNameChange={this.handleInputNameChange}
                />
                <h2>Numerot</h2>
                <ContactDirectory persons={this.state.persons} />
            </div>
        )
    }
}

const ContactForm = ({ newContactHandler, newName, inputNameChange }) => {
    return (
        <div>
            <form onSubmit={newContactHandler}>
                <div>
                    nimi: <input value={newName} onChange={inputNameChange} />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

const ContactDirectory = ({persons}) => {
    return (
        <div>
            <ul>
                {persons.map(person => <Contact key={person.name} person={person} />)}
            </ul>
        </div>
    )
}

const Contact = ({person}) => {
    return (
        <li>{person.name}</li>
    )
}

export default App