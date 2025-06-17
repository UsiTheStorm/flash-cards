import { useState } from 'react';

import './App.css';
import questions from './questions.json';

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>
      <FlashCards />
    </div>
  );
}

export default App;
