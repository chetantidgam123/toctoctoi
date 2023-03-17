import React from 'react'
import Squre from './Squre';
import "./Box.css";
const Box = ({ board, onClick }) => {
    return (
        <div className="board">
            {
                board?.map((value, idx) => {
                    return <Squre key={idx} value={value} onClick={() => value === null && onClick(idx)} />
                })
            }
        </div>
    )
}

export default Box
