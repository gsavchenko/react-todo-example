import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodo] = useState([
    {
      id: uuid(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id: uuid(),
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: uuid(),
      title: 'Meeting with boss',
      completed: false
    },
  ]);

  function toggleComplete(id) {
    setTodo(todos => todos.map(todo =>
        (todo.id === id)
          ? {...todo, completed: !todo.completed }
          : todo
      ))
  }

  function deleteTodo(id) {
    setTodo(todos => todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    
    setTodo(todos => [...todos, newTodo]);
  }

  return (
    <div>
      <Header/>
      <AddTodo
        addTodo={addTodo}/>
      <Todos
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
