import React, { useEffect, useState } from 'react'
import '../Style/testBoard.css'
import { data } from '../Data/data'
import IconButton from '@mui/material/IconButton';
const Circle = ({ no, done, setQuesId }) => {
    return (
        <IconButton style={{ padding: '0px', margin: '5px 30px' }} onClick={() => { setQuesId(no - 1) }}>
            <div className='crc-main' style={{ backgroundColor: done ? 'rgb(1, 179, 179)' : 'grey' }}>
                {no}
            </div>
        </IconButton>
    )
}

const TestBoard = ({ setQuesId }) => {
    const [backItems, setBackItems] = useState([]);
    useEffect(() => {
        setBackItems(JSON.parse(localStorage.getItem('testBoardList')))
    }, [localStorage.getItem('testBoardList')])
    return (
        <div className="tb-main">
            <div className="tb-header">Test Board</div>
            <div className="tb-middle">
                {
                    backItems.map(item => {
                        return <Circle no={item.id} done={item.done} setQuesId={setQuesId} />
                    })
                }
            </div>
        </div>
    )
}

export default TestBoard
