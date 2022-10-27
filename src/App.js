import './App.css';
import React from 'react'
import Nav from './components/nav/nav'
import AddEntry from './components/addEntry/addEntry';
import Cards from './components/entries/cards';

function App() {
  return (
    <div className="App">
      <Nav />
      <AddEntry />
      <Cards />
    </div>
  );
}

export default App;
