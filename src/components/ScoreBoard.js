import React, { useEffect, useState } from 'react'
import '../Style/ScoreBoard.css'
import { data } from '../Data/data'

const ScoreCard = ({ total, attempted, correct }) => {
    return (
        <div className="sc-main">
            <div className="sc-upper">
                <div className="sc-left">Total Questions: {total}</div>
                <div className="sc-right">Total Attepmted: {attempted}</div>
            </div>
            <div className="sc-lower">
                <div className="sc-left">Total correct: {correct}</div>
                <div className="sc-right">Wrong Answers: {attempted - correct}</div>
            </div>
        </div >
    )
}

const ScoreBoard = () => {
    const [show, setShow] = useState(false);
    const [correctToShow, setCorrectToShow] = useState(0);
    const [attemptedToShow, setAttemptedToShow] = useState(0);
    let backData = JSON.parse(localStorage.getItem('testBoardList'));
    let attempted = 0, correct = 0;
    useEffect(async () => {
        setShow(false);
        backData.map((item, index) => {
            if (item.answer != "") attempted++;
            if (item.answer == data[index].correctOption) {
                correct++;
            }
        })
        setCorrectToShow(correct)
        setAttemptedToShow(attempted)
        setShow(true);
    }, [])
    return (
        <div className='sb-main'>
            <div className="sb-container">
                {
                    show ?
                        <ScoreCard total={data.length} correct={correctToShow} attempted={attemptedToShow} />
                        : <div>null</div>
                }
            </div>
        </div>

    )
}

export default ScoreBoard
