import React from 'react';
import PropType from 'prop-types';

function TodoItem(props) {
  const { id, title } = props.todo;
  
  function getStyle(props) {
    return {
      textDecoration: props.todo.completed
        ? 'line-through'
        : 'none'
    }
  }

  // const toggleComplete = (event) => {
  //   console.log(event);
  // }

  return (
    <div style={getStyle(props)}>
      <p>
        <input type="checkbox" onChange={props.toggleComplete.bind(this, id)}/>
        {title}
        <button style={deleteButton} onClick={props.deleteTodo.bind(this, id)}>delete</button>
      </p>     
    </div>
  )
}

const deleteButton = {
  border: '3px solid #FE53BB',
  color: '#FE53BB',
  backgroundColor: '#a00161',
  cursor: 'pointer',
  float: 'right'
};

TodoItem.prototype = {
  todo: PropType.object.isRequired
}


export default TodoItem
