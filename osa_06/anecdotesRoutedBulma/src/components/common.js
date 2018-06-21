import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  const change = () => {
    let toggle = document.querySelector(".navbar-burger")
    let menu = document.querySelector(".navbar-menu")    
    toggle.classList.toggle("is-active")
    menu.classList.toggle("is-active");    
  }
  return (
    
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <h1 className="title">Software</h1>
              <h1 className="title has-text-grey-lighter">anecdotes</h1>

            </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA" onClick={change}>
            
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">

              <NavLink exact to="/" className="navbar-item" activeClassName="navbar-item is-active">anecdotes</NavLink>

              <NavLink exact to="/create" className="navbar-item" activeClassName="navbar-item is-active" >create new</NavLink>

              <NavLink exact to="/about" className="navbar-item" activeClassName="navbar-item is-active">about</NavLink>

            </div>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export const About = () => (
  <div className="container">
    <section className="section">

      <h1 className="title">About anecdote app</h1>
    </section>
    <section className="section">

      <div className="columns">

        <div className="column is-three-fifths">

          <h3 className="title">According to Wikipedia:</h3>

          <em>An anecdote is a brief, revealing account of an individual person or an incident.
            Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
            such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>
          <br/><br/>
          <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
        </div>
        <div className="column">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Edsger_Wybe_Dijkstra.jpg" alt="Edsger Dijkstra" />
        </div>
      </div>
    </section>
  </div>
)

export const Footer = () => (
  
  <div className="hero-foot">
    <div className="container">
      <div className="level">
        <div className="level-left">
        <div className="level-item subtitle is-5">
          Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.
        </div>
        </div>
        <div className="level-right">
        <div className="level-item subtitle is-5">
          <a href="https://github.com/durak/2018fullstack/tree/master/osa_06/anecdotesRoutedBulma"> Source </a>
        </div>
        </div>

      </div>
      <div className="level"></div>
    </div>
  </div>  
)