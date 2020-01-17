import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        };
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <CounterButton title="Peter" by={2} incrementMethod={this.increment}></CounterButton>
                <CounterButton title="John" by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton title="Barnie" by={10} incrementMethod={this.increment}></CounterButton>
                <CounterButton title="Melissa" incrementMethod={this.increment}></CounterButton>
                <div className="total">
                    Total: {this.state.counter}
                </div>
            </div>
        );
    }

    increment(by) {
        // console.log(`increment in parent by ${by}`);
        this.setState(
            (prevState) => {
                return {counter: (prevState.counter + by)};
            }
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
    }

    render() {
        const counterStyle = {fontFamily: 'Arial', color: '#444444'};
        let color = 'red';
        if (this.state.counter >= 15) color = 'orange';
        if (this.state.counter >= 30) color = 'green';
        return (
                <div className="counterLine">
                    <span className="title">{this.props.title}:</span>
                <span>
                <button onClick={this.increment}>+{this.props.by}</button>
                </span>

                <div className="progressBar" style={{width: this.state.counter+'px', background: color}}></div>
                </div>
        );
    };

    increment() {
        // this.state.counter++ => Bad Practice
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + this.props.by};
            }
        );
        this.props.incrementMethod(this.props.by);
    };
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;