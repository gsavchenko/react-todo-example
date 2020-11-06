import React from 'react'

function Header() {
  return (
    <header style={header}>
      <h1>Todo List</h1>
    </header>
  )
}

const header = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

export default Header
