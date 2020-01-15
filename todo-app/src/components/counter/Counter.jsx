import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

    // Define the initial state in a constructor
    // state => counter = 0
    constructor() {
        super(); // Error number one - not calling super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        const counterStyle = {fontFamily: 'Arial', color: '#444444'};
        return (
            <div className="counter">
                <h1>Counter</h1>
                <div>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                </div>
                <div className="count" style={counterStyle}>
                <span >{this.state.counter}</span>
                </div>
            </div>
        );
    };

    increment() {
        // this.state.counter++ => Bad Practice
        this.setState({
            counter: this.state.counter + 1
        });
    };
    
    decrement() {
        // this.state.counter-- => Bad Practice
        this.setState({
            counter: this.state.counter - 1
        });
    };
}



export default Counter;