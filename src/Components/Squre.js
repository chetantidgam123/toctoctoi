import React from 'react'
import "./Squre.css";
const Squre = ({ value, onClick }) => {
    const style = value === "X" ? "box x" : "box o";
    return <button className={style} onClick={onClick}>{value}</button>

}

export default Squre
