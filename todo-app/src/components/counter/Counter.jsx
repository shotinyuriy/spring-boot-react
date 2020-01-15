import React, { Component } from 'react';
import './Counter.css';

function Counter() {
    return (
        <div className="counter">
            <h1>Counter</h1>
            <div>
            <button>+1</button>
            <button>-1</button>
            </div>
            <div className="count">
            <span >0</span>
            </div>
        </div>
    );
}

export default Counter;