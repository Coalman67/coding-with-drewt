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
//what is an interface again?
const defaultChore: Todo = {
  title: 'Watch the Birbs',
  severity: Severity.Medium
}

const exampleChoreTitles: string[] = ['Walk the dog', 'Brush my teeth', 'Pet the cat', 'Eat dinner', 'Go to sleep on time']

function getRandomIndex(length: number): number {
  return Math.floor(Math.random() * length)
}

function App() {
  const [chores, setChores] = useState<Todo[]>([])
  const [title, setTitle] = useState<string>('')
  const [placeholder, setPlaceholder] = useState<string>('Go to the dentist')

  console.log(title)

  const handleConfirm = () => { console.log('clicked check, do thing') }


  function addChore() {
    const isTitleBlank = title.trim().length === 0
    if (isTitleBlank) {
      return
    }

    const isTitleLengthy = title.length > 20
    if (isTitleLengthy) {
      alert('Todo is too long')
      return
    }

    const newChores = [...chores]

    const newChore: Todo = { title }
    newChores.push(newChore)

    setChores(newChores)

    // Reset the title for a new Todo
    setTitle('')

    // TODO: Change placeholder to one of several options
    const randomIndexToUse = getRandomIndex(exampleChoreTitles.length)
    const nextPlaceholder = exampleChoreTitles[randomIndexToUse]
    setPlaceholder(nextPlaceholder)
  }

  function removeChore(position: number = chores.length - 1) {
    const newChores = [...chores]
    newChores.splice(position, 1)
    setChores(newChores)
  }

  const canAddTodo = title.length < 20

  return (
    <div className="App">
      <div className="container">
        {/* The canvas */}

        <div>
          <button type="button" className={`btn ${canAddTodo ? '' : 'disabled'}`} style={{ marginRight: 16 }}
            disabled={!canAddTodo}
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


        <input value={title} id="title" type="text" placeholder={placeholder} maxLength={30}
          onChange={event => {
            const inputValue = event.target.value
            setTitle(inputValue)
          }} />

        <hr />

        {chores.map((chore, i) =>
          <TodoItem
            key={`${i}:${chore.title}`}
            title={chore.title}
            severity={chore.severity}
            onConfirm={handleConfirm}
            onCancel={() => { removeChore(i) }} />
        )}


        {/* End of canvas */}
      </div>
    </div>
  );
}

export default App;
