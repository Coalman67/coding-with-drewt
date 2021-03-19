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

    const newChores = [
      ...chores,
      { title: 'Make your bed', severity: Severity.High },
      { title: 'Wash the dishes', severity: Severity.Extreme }
    ]

    setChores(newChores)

    console.log(newChores)
  }

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


        {chores.map((chore) => {
          return (
            <TodoItem title={chore.title} severity={chore.severity} />
          )
        })}

        {/* 
        [1, 4, 9, 16]
        [2, 8, 18, 32]
         */}

        <hr />
        {/* <Todo title="Take out the trash" severity={Severity.Medium} />
        <Todo title="See Despicable Me 2...again" /> */}
        {/* <TodoItem title="Drink Tea" />
        <TodoItem title="Pet Jer" severity={Severity.Extreme} />
        <TodoItem title="I did it" />
        <TodoItem title="woot woooooot" />
        <TodoItem title="Clean my laundry" severity={Severity.High} />
        <TodoItem title="make the bed" severity={Severity.Medium} />
        <TodoItem title="no stop just stop we're not doing this anymore" /> */}

        {/* End of canvas */}
      </div>
    </div>
  );
}

export default App;
