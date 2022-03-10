import React from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname = "Jane" lastname = "Doe" age = {45} hairColor = "Black"  />
      <PersonCard firstname = "John" lastname = "Smith" age = {88} hairColor = "Brown"  />
      <PersonCard firstname = "Millard" lastname = "Fillmore" age = {50} hairColor = "Brown"  />
      <PersonCard firstname = "Maria" lastname = "Smith" age = {62} hairColor = "Brown"  />
    </div>
  );
}

export default App;
