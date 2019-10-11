import React, { Component } from 'react';
import Main from "../Main/main";
import axios from "axios";

class Upbit extends Component {
    _isMounted = false

    constructor() {
        super()
        this.state = {
            upbit: [],
        }
    }

    componentDidMount() {
        this._isMounted = true
        this.getCoin();
        this.interval = setInterval(() => this.getCoin(), 60 * 1000);
    }

    getCoin() {
        axios.get("http://127.0.0.1:8000/upbit")
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        upbit: response.data
                    })
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { upbit } = this.state
        return (
            <div className='main'>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>{
                    upbit.map((coin, index) => {
                        return <Main data={coin} key={index} css={'upbit'} />
                    })}
                </div>
            </div >
        );
    }
}
export default Upbit;
