import React, { useEffect, useState } from 'react'
import Question from './Question'
import '../Style/index.css'
import { data } from '../Data/data'
import TestBoard from './TestBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScoreBoard from './ScoreBoard';

const QuizApp = () => {
  const [quesId, setQuesId] = useState(0);
  let testBoardList = [
    { id: 1, done: false, answer: "" },
    { id: 2, done: false, answer: "" },
    { id: 3, done: false, answer: "" },
    { id: 4, done: false, answer: "" },
    { id: 5, done: false, answer: "" },
    { id: 6, done: false, answer: "" },
    { id: 7, done: false, answer: "" },
    { id: 8, done: false, answer: "" },
    { id: 9, done: false, answer: "" },
    { id: 10, done: false, answer: "" },
  ]
  useEffect(() => {
    localStorage.setItem('testBoardList', JSON.stringify(testBoardList));
  }, [])
  return (
    <div className="index-main">
      <div className="index-left">
        <Question prop={data[quesId]} quesId={quesId} setQuesId={setQuesId} len={data.length} />
      </div>
      <div className="index-right">
        <TestBoard setQuesId={setQuesId} />
      </div>
    </div>
  )
}

function Index() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< QuizApp />}></Route>
        <Route exact path='/scoreboard' element={<ScoreBoard />}></Route>
      </Routes>
    </Router>
  )

}

export default Index