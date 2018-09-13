import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CoffeeDetail from './pages/CoffeeDetail';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/coffee/:coffeeId" component={CoffeeDetail} />
                </div>
            </div>
        );
    }
}

export default App;
