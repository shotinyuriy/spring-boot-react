import React, { Component } from 'react';
import './Counter.css';

function Counter() {
    return (
        <div className="counter">
            <h1>Counter</h1>
            <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            </div>
            <div className="count">
            <span >0</span>
            </div>
        </div>
    );
}

function increment() {
    console.log('increment');
}

function decrement() {
    console.log('decrement');
}

export default Counter;