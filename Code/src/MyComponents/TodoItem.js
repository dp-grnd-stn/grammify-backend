import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Timer } from './Timer';
export const TodoItem = ({todo, onDelete}) => {
    const {isStart, setIsStart} = useState(false);
    const startTimer = () => {
        // setIsStart(true);
        console.log("I am starting timer");
    }
    return (
        <>
        {isStart ? <Timer /> : 
            <div>
            <h4>{todo.title}</h4>
            <p style={{float:"right"}}>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
            <button className="btn btn-sm btn-primary" onClick={()=>{startTimer()}}>Start</button>
        </div>
        }
                </>
    )
}
