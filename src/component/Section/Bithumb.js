import React, { Component } from 'react';
import Main from "../Main/main";
import axios from "axios";

class Bithumb extends Component {

    constructor() {
        super()
        this.state = {
            bithumb: [],
        }
    }

    componentDidMount() {
        this.getCoin();
    }

    getCoin() {
        axios.get("http://127.0.0.1:8000/bithumb")
            .then(response => {
                this.setState({
                    bithumb: response.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        let { bithumb } = this.state
        return (
            <div className='main'>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>{
                    bithumb.map((coin, index) => {
                        return <Main data={coin} key={index} css={'bithumb'}></Main>
                    })}
                </div>
            </div >
        );
    }
}

export default Bithumb;
