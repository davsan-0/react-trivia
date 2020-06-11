import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchQuestions, Difficulty } from "./api/opentdb";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetchQuestions(5, Difficulty.HARD).then(q => setQuestions(q.map((el: any) => el.question)));
  }, []);
  
  return (
    <div className="App">
      {questions}
    </div>
  );
}

export default App;
