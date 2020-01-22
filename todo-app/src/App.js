import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import { SecondComponent } from './components/learning-examples/SecondComponent';
import ThirdComponent, { FourthComponent } from './components/learning-examples/ThirdComponent';

import Counter from './components/counter/Counter';

import TodoApp from './components/todo/TodoApp'

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter></Counter>*/}
                <TodoApp></TodoApp>
            </div>
        );
    }
}

class LearningComponents extends Component {
    render() {
        return (
                <div className="LearningComponents">
                    <h1>Learning Components:</h1>
                    <FirstComponent />
                    <SecondComponent />
                    <ThirdComponent />
                    <FourthComponent />
                </div>
        );
    }
}

export default App;