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

function App() {

  console.log('hello fiona')

  const [chores, setChores] = useState<Todo[]>([])

  console.log(chores)

  const doWhatOliviaSays = () => {
    // When a user clicks a button do this:

    const newChores = [...chores]


    newChores.push(
      { title: 'Make your bed', severity: Severity.High },
      { title: 'Wash the dishes', severity: Severity.Extreme }
    )

    setChores(newChores)

    console.log(newChores)
  }

  const giannisChores: string[] = ['Pet Jer', 'Clean my laundry', 'make the bed']
  const drewsChores: string[] = ['Clean the litter box', 'brush my teeth']

  return (
    <div className="App">
      <div className="container">
        {/* The canvas */}


        <button type="button" className="btn"
          // WHEN A USER CLICKS
          onClick={
            // DO THIS
            () => {
              doWhatOliviaSays()
            }
          }>
          Add to Our List
        </button>

        <hr />


        {/* 
  [
    { title: 'make your bed' }, 
    { title: 'wash the dishes' }
  ]


    <TodoItem title="make your bed" />
    <TodoItem title="wash the dishes" />

*/}
        {chores.map((chore) => {
          return (
            <TodoItem title={chore.title} severity={chore.severity} />
          )
        })}

        <hr />

        {/* Gianni's Chores */}
        {giannisChores.map(chore => <TodoItem title={chore} />)}

        {/* {[<TodoItem title="Pet Jer" />, <TodoItem title="Clean my laundry" />, <TodoItem title="make the bed" />]} */}

        <hr />

        {/* Drew's Chores */}
        {drewsChores.map(chore => <TodoItem title={chore} />)}


        {/* End of canvas */}
      </div>
    </div>
  );
}

export default App;
