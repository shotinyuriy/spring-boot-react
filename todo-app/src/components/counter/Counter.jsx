import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0,
            childCounters: []
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.register = this.register.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <CounterButton title="Peter" by={2} incrementMethod={this.increment} decrementMethod={this.decrement} registerMethod={this.register}></CounterButton>
                <CounterButton title="John" by={5} incrementMethod={this.increment} decrementMethod={this.decrement} registerMethod={this.register}></CounterButton>
                <CounterButton title="Barnie" by={10} incrementMethod={this.increment} decrementMethod={this.decrement} registerMethod={this.register}></CounterButton>
                <CounterButton title="Melissa" incrementMethod={this.increment} decrementMethod={this.decrement} registerMethod={this.register}></CounterButton>
                <div className="total">
                    Total: {this.state.counter}
                </div>
                <ResetButton resetMethod={this.reset}></ResetButton>
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

    decrement(by) {
        this.setState(
            (prevState) => {
                return {counter: (prevState.counter - by)};
            }
        )
    }

    reset() {
        this.setState(
            () => {
                return {counter: 0};
            }
        );
        this.state.childCounters.forEach((item) => {
            item.reset();
        });
    }

    register(childCounter) {
        if (this.state.childCounters.indexOf(childCounter) < 0) {
            this.setState(
                (prevState) => {
                    prevState.childCounters.push(childCounter);
                    return {
                        childCounters: prevState.childCounters
                    }
                }
            );
        }
    }
}

class ResetButton extends Component {
    constructor() {
        super();
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        )
    }

    reset() {
        this.props.resetMethod();
    }
}

class CounterButton extends Component {

    // Define the initial state in a constructor
    // state => counter = 0
    constructor() {
        super(); // Error number one - not calling super()
    }

    render() {
        const counterStyle = {fontFamily: 'Arial', color: '#444444'};
        return (
                <div className="counterLine">
                    <span className="title">{this.props.title}:</span>
                <span>
                <button onClick={() => {this.props.incrementMethod(this.props.by) }}>+{this.props.by}</button>
                <button onClick={() => { this.props.decrementMethod(this.props.by) }}>-{this.props.by}</button>
                </span>
                </div>
        );
    }
}

class CounterButtonWithBar extends Component {

    // Define the initial state in a constructor
    // state => counter = 0
    constructor() {
        super(); // Error number one - not calling super()
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
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
                <button onClick={this.decrement}>-{this.props.by}</button>
                </span>

                <div className="progressBar" style={{width: this.state.counter+'px', background: color}}></div>
                <span className="count">{this.state.counter}</span>
                </div>
        );
    }

    increment() {
        // this.state.counter++ => Bad Practice
        this.props.registerMethod(this);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + this.props.by};
            }
        );
        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.props.registerMethod(this);
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - this.props.by};
            }
        );
        this.props.decrementMethod(this.props.by);
    }

    reset() {
        this.setState(
            (prevState) => {
                return {counter: 0}
            }
        )
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;