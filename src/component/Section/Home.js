import React, { Component } from 'react';
import Main from "../Main/main";
import './home.css'

class Home extends Component {

    constructor() {
        super()
        this.stat = {
            coin: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='main'>
                <Main></Main>
            </div >
        );
    }
}

export default Home;
