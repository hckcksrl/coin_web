import React, { Component } from 'react';
import Main from "../Main/main";
import axios from "axios";

class Korbit extends Component {

    constructor() {
        super()
        this.state = {
            korbit: [],
        }
    }

    componentDidMount() {
        this.getCoin();
    }

    getCoin() {
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
        let { korbit } = this.state
        return (
            <div className='main'>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>{
                    korbit.map((coin, index) => {
                        return <Main data={coin} key={index} css={'korbit'}></Main>
                    })}
                </div>
            </div >
        );
    }
}

export default Korbit;
