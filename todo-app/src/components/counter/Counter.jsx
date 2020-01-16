import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <CounterButton by={1}></CounterButton>
                <CounterButton by={5}></CounterButton>
                <CounterButton by={10}></CounterButton>
                <CounterButton></CounterButton>
            </div>
        );
    }
}

class CounterButton extends Component {

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
                <>
                <div>
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                </div>
                <div className="count" style={counterStyle}>
                <span >{this.state.counter}</span>
                </div>
                </>
        );
    };

    increment() {
        // this.state.counter++ => Bad Practice
        this.setState({
            counter: this.state.counter + this.props.by
        });
    };
    
    decrement() {
        // this.state.counter-- => Bad Practice
        this.setState({
            counter: this.state.counter - this.props.by
        });
    };
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;