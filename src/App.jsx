import { useState } from 'react';

import './App.css';
import questions from './questions.json';

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={q.id === selectedId ? 'selected' : ''}
          onClick={() => handleClick(q.id)}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
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
