import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* The canvas */}


        <Todo title="Take out the trash" />
        <Todo title="See Despicable Me 2...again" />
        <Todo title="Drink Tea" />
        <Todo title="Pet Jer" />
        <Todo title="I did it" />
        <Todo title="woot woooooot" />



        {/* End of canvas */}
      </div>
    </div>
  );
}

export default App;
