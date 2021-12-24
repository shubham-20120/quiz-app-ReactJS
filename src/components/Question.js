import React, { useEffect, useState } from 'react'
import '../Style/question.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Question({ prop, quesId, setQuesId, len }) {
    const navigate = useNavigate();
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(false);
    const [checkedC, setCheckedC] = useState(false);
    const [checkedD, setCheckedD] = useState(false);
    const clearSelection = () => {
        setCheckedA(false);
        setCheckedB(false);
        setCheckedC(false);
        setCheckedD(false);
    }
    useEffect(() => {
        let lst = JSON.parse(localStorage.getItem('testBoardList'));
        clearSelection()
        if (lst[quesId].answer == "A") { setCheckedA(true) }
        else if (lst[quesId].answer == "B") { setCheckedB(true) }
        else if (lst[quesId].answer == "C") { setCheckedC(true) }
        else if (lst[quesId].answer == "D") { setCheckedD(true) }
    }, [quesId])
    const goPrevious = () => {
        if (quesId != 0) {
            setQuesId(quesId - 1);
            clearSelection()
        }
    }
    const goNext = () => {
        if (quesId != (len - 1)) {
            setQuesId(quesId + 1);
            clearSelection()
        } else {
            navigate('/scoreboard')
        }
    }
    const setValue = (val) => {
        let lst = JSON.parse(localStorage.getItem('testBoardList'));
        lst[quesId].answer = val;
        lst[quesId].done = true;
        localStorage.setItem('testBoardList', JSON.stringify(lst));
    }
    return (
        <div className="ques-main">
            <div className="ques-question">{prop.id}. {prop.question}</div>
            <div className="ques-options">
                <RadioGroup aria-colcount  >
                    <FormControlLabel checked={checkedA} className="individual-option" value="A" control={<Radio />} onChange={e => { setValue(e.target.value); clearSelection(); setCheckedA(true) }} label={prop.options.a} />
                    <FormControlLabel checked={checkedB} className="individual-option" value="B" control={<Radio />} onChange={e => { setValue(e.target.value); clearSelection(); setCheckedB(true) }} label={prop.options.b} />
                    <FormControlLabel checked={checkedC} className="individual-option" value="C" control={<Radio />} onChange={e => { setValue(e.target.value); clearSelection(); setCheckedC(true) }} label={prop.options.c} />
                    <FormControlLabel checked={checkedD} className="individual-option" value="D" control={<Radio />} onChange={e => { setValue(e.target.value); clearSelection(); setCheckedD(true) }} label={prop.options.d} />
                </RadioGroup>
            </div>
            <div className="ques-bottom-btns">
                <Button variant="outlined" disabled={quesId == 0 ? true : false} className="individual-btn" onClick={goPrevious}>Previous</Button>
                <Button variant="outlined" className="individual-btn" onClick={clearSelection}>Clear Selection</Button>
                <Button variant="outlined" className="individual-btn" onClick={goNext}>{quesId == len - 1 ? "Score Board" : "Next"}</Button>
            </div>
        </div >
    )
}

export default Question