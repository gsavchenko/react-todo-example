import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={header}>
      <h1>Todo List</h1>
      <Link style={link} to="/">Home</Link> | <Link style={link} to="/about">About</Link>
    </header>
  )
}

const header = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

const link = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header
