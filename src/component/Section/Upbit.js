import React, { Component } from 'react';
import Main from "../Main/main";
import axios from "axios";

class Upbit extends Component {
    constructor() {
        super()
        this.state = {
            upbit: [],
        }
    }

    componentDidMount() {
        this.getCoin();
    }

    getCoin() {
        axios.get("http://127.0.0.1:8000/upbit")
            .then(response => {
                this.setState({
                    upbit: response.data
                })
                return true
            })
            .catch(err => console.log(err));
    }

    render() {
        let { upbit } = this.state
        return (
            <div className='main'>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>{
                    upbit.map((coin, index) => {
                        return <Main data={coin} key={index} css={'upbit'}></Main>
                    })}
                </div>
            </div >
        );
    }
}
export default Upbit;
