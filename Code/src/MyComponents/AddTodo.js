import React, { useState } from 'react';
import './AddTodo.css';

export const AddTodo = ({ addTodo }) => {

    //  Harry Todo
    const [title, setTitle] = useState("");
    const [timer, setTimer] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !timer) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, timer);
            setTitle("");
            setTimer("");
        }
    }
    //  Harry Todo

    // Grammarly
    // const charval = document.getElementById("textarea");
    // let totalCount = document.getElementById("total-conter");
    // let remainingCoutn = document.getElementById("remaining-counter");

    // let userChar = 0;

    // const updateCounter = () => {
    // userChar = charval.value.length;
    // totalCount.innerText = userChar;
    // remainingCoutn.innerText = 150 - userChar;
    // };

    // charval.addEventListener("keyup", () => updateCounter());
    // Grammarly

    return (
        <div className="container my-3">

            <h2>Grammify!</h2>
            <p>
                Check your English text for grammar, spelling, and punctuation errors with
                Grammify!
            </p>

            <form onSubmit={submit}>
                <textarea
                id="textarea"
                class="textarea"
                placeholder="Write here..."
                maxlength="150"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                ></textarea>

                <div className="mb-3">
                    <label htmlFor="timer" className="form-label">Timer</label>
                    <input type="text" value={timer} onChange={(e) => setTimer(e.target.value)} className="form-control" id="timer" aria-describedby="timer" />
                </div>

                <button type="submit">Add Todo</button>

                <div class="counter-container">
                    <p>Total character: <span id="total-conter"> 0</span></p>
                    <p>
                    Remaining:
                    <span class="remaining-counter" id="remaining-counter">150</span>
                    </p>
                </div>
            </form>
        </div>
    )
}
