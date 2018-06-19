import React from 'react'
import { filterSet } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    this.props.store.dispatch(filterSet(event.target.value))
    console.log(this.props.store.getState())
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter