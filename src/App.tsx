import React, { useState } from 'react';
import './App.css';
import { TodoItem } from './components/Todo';
import { Severity, Todo } from './types';

const todos: Todo[] = [
  {
    title: 'Take out the trash',
    severity: Severity.Medium
  },
  {
    title: 'See Despicable Me 2...again'
  },
  {
    title: 'hello',
    severity: Severity.Extreme,
  }
]

const defaultChore: Todo = {
  title: 'Watch the Birbs',
  severity: Severity.Medium
}


function App() {
  const [chores, setChores] = useState<Todo[]>([])
  const [title, setTitle] = useState<string>('hello')



  console.log(title)

  function addChore() {
    const newChores = [...chores]

    const newChore: Todo = {
      title: title
    }
    newChores.push(newChore)
    setChores(newChores)
  }

  function removeChore() {
    const newChores = [...chores]
    newChores.pop()
    setChores(newChores)
  }



  return (
    <div className="App">
      <div className="container">
        {/* The canvas */}

        <div>
          <button type="button" className="btn" style={{ marginRight: 16 }}
            // WHEN A USER CLICKS
            onClick={
              // DO THIS
              () => {
                addChore()
              }
            }>
            Add Chore
        </button>

          <button type="button" className="btn"
            // WHEN A USER CLICKS
            onClick={
              // DO THIS
              () => {
                removeChore()
              }
            }>
            Remove Chore
        </button>
        </div>

        <hr />

        <input id="title" type="text" onChange={event => {
          const inputValue = event.target.value
          setTitle(inputValue)
        }} />

        <hr />

        {chores.map((chore, i) =>
          <TodoItem key={`${i}:${chore.title}`} title={chore.title} severity={chore.severity} />
        )}

        <hr />



        {/* End of canvas */}
      </div>
    </div>
  );
}

export default App;
