import React, { Component } from 'react';
import Main from "../Main/main";
import './home.css'
import axios from "axios";

class Home extends Component {

    constructor() {
        super()
        this.state = {
            bithumb: [],
            coinone: [],
            upbit: [],
            korbit: []
        }
    }

    componentDidMount() {
        this.getCoin();
        // this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
    }

    getCoin() {
        axios.get("http://127.0.0.1:8000/bithumb")
            .then(response => {
                this.setState({
                    bithumb: response.data
                })
                return response.json()
            })
            .catch(err => console.log(err));
        axios.get("http://127.0.0.1:8000/coinone")
            .then(response => {
                this.setState({
                    coinone: response.data
                })
                return response.json()
            })
            .catch(err => console.log(err));
        axios.get("http://127.0.0.1:8000/upbit")
            .then(response => {
                this.setState({
                    upbit: response.data
                })
                return response.json()
            })
            .catch(err => console.log(err));
        axios.get("http://127.0.0.1:8000/korbit")
            .then(response => {
                this.setState({
                    korbit: response.data
                })
                return response.json()
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)
        return (
            <div className='main'>
                <div><Main></Main></div>
                <div><Main></Main></div>
                <div><Main></Main></div>
            </div >
        );
    }
}

export default Home;
