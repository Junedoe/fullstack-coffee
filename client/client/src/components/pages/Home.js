import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffees: []
        };
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.coffees.map(c => (
                        <li key={c._id}>{c.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/api/coffees`).then(res => {
            let coffees = res.data;
            this.setState({ coffees });
        });
    }
}

export default Home;
