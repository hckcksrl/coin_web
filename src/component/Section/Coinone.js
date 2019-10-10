import React, { Component } from 'react';
import Main from "../Main/main";
import axios from "axios";

class Coinone extends Component {

    constructor() {
        super()
        this.state = {
            coinone: [],
        }
    }

    componentDidMount() {
        this.getCoin();
    }

    getCoin() {
        axios.get("http://127.0.0.1:8000/coinone")
            .then(response => {
                this.setState({
                    coinone: response.data
                })
                return true
            })
            .catch(err => console.log(err));
    }

    render() {
        let { coinone } = this.state
        return (
            <div className='main'>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>{
                    coinone.map((coin, index) => {
                        return <Main data={coin} key={index} css={'coinone'}></Main>
                    })}
                </div>
            </div >
        );
    }
}

export default Coinone;
