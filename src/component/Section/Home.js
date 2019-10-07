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
        this.interval = setInterval(() => this.getCoin(), 10 * 1000);
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
        let { bithumb, korbit, upbit, coinone } = this.state
        return (
            <div className='main'>
                <div style={{ flex: 1, marginRight: '25px' }}><p>빗썸</p>{
                    bithumb.map((coin, index) => {
                        return <Main data={coin} key={index}></Main>
                    })}</div>
                <div style={{ flex: 1, marginRight: '25px' }}><p>업비트</p>{
                    upbit.map((coin, index) => {
                        return <Main data={coin} key={index}></Main>
                    })}</div>
                <div style={{ flex: 1, marginRight: '25px' }}><p>코인원</p>{
                    coinone.map((coin, index) => {
                        return <Main data={coin} key={index}></Main>
                    })}</div>
                <div style={{ flex: 1, marginRight: '25px' }}><p>코빗</p>{
                    korbit.map((coin, index) => {
                        return <Main data={coin} key={index}></Main>
                    })}</div>
            </div >
        );
    }
}

export default Home;
