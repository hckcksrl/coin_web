import React, { Component } from 'react';
import Main from "../Main/main";
import './home.css'
import axios from "axios";

class Home extends Component {
    _isMounted = false

    constructor() {
        super()
        this.state = {
            bithumb: [],
            coinone: [],
            upbit: [],
            korbit: []
        }
        this.getCoin = this.getCoin.bind(this)
    }

    componentDidMount() {
        this._isMounted = true
        this.getCoin();
        this.interval = setInterval(() => this.getCoin(), 60 * 1000);
    }

    getCoin() {
        axios.get("http://127.0.0.1:8000/bithumb")
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        bithumb: response.data
                    })
                }
            })
            .catch(err => console.log(err));
        axios.get("http://127.0.0.1:8000/coinone")
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        coinone: response.data
                    })
                }
            })
            .catch(err => console.log(err));
        axios.get("http://127.0.0.1:8000/upbit")
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        upbit: response.data
                    })
                }
            })
            .catch(err => console.log(err));
        axios.get("http://127.0.0.1:8000/korbit")
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        korbit: response.data
                    })
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { bithumb, korbit, upbit, coinone } = this.state
        return (
            <div className='main'>
                <div style={{ flex: 1, marginRight: '25px' }}>
                    <p>빗썸</p>
                    {bithumb.map((coin, index) => {
                        return <Main data={coin} key={index} />
                    })}
                </div>
                <div style={{ flex: 1, marginRight: '25px' }}>
                    <p>업비트</p>
                    {upbit.map((coin, index) => {
                        return <Main data={coin} key={index} />
                    })}
                </div>
                <div style={{ flex: 1, marginRight: '25px' }}>
                    <p>코인원</p>
                    {coinone.map((coin, index) => {
                        return <Main data={coin} key={index} />
                    })}
                </div>
                <div style={{ flex: 1, marginRight: '25px' }}>
                    <p>코빗</p>
                    {korbit.map((coin, index) => {
                        return <Main data={coin} key={index} />
                    })}
                </div>
            </div >
        );
    }
}

export default Home;
