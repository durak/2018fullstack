import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      names: [],
      search: ''
    }
  }

  componentDidMount() {
    console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({
          countries: response.data,
          names: response.data.map((country) => country.name)
        })
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = (value) => () => {
    this.setState({ search: value })
  }


  render() {

    return (
      <div>
        <Searchbar search={this.state.search} handleChange={this.handleChange} />
        <Results countries={this.state.countries} names={this.state.names} search={this.state.search} handleClick={this.handleClick} />
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

const Results = ({ countries, names, search, handleClick }) => {
  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(search.toLowerCase())
  )

  if (filteredNames.length > 10) return <div>Tarkenna hakuehtoja</div>
  if (filteredNames.length > 1) return <MultipleResults names={filteredNames} handleClick={handleClick} />
  if (filteredNames.length === 1) return <SingleResult countries={countries} name={search} />

  return (<div>Ei tuloksia</div>)
}

const MultipleResults = ({ names, handleClick }) => {
  return (
    <div>
      <ul>
        {names.map((name) => <li key={name} onClick={handleClick(name)}>{name}</li>)}
      </ul>
    </div>
  )
}

const SingleResult = ({ countries, name }) => {
  const country = countries.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()))[0]
  console.log(country)

  return (
    <div>
      <h1>{country.name} {country.nativeName}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <img src={country.flag} alt="" height="400" />
    </div>
  )

}

export default App;
