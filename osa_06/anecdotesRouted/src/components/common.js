import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {

  const menuStyle = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightgrey'
  }

  const activeStyle = {
    fontWeight: 'bold',
    color: 'red'
  }
  return (
    <div style={menuStyle}>
      <NavLink exact to="/" activeStyle={activeStyle}>anecdotes</NavLink> &nbsp;
      <NavLink exact to="/create" activeStyle={activeStyle}>create new</NavLink> &nbsp;
      <NavLink exact to="/about" activeStyle={activeStyle}>about</NavLink> &nbsp;
    </div>
  )
}

export const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>
    
    <em>An anecdote is a brief, revealing account of an individual person or an incident. 
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself, 
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative. 
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

export const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code. 
  </div>
)