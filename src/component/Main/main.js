import React, { Component } from 'react';
import './main.css'

class Main extends Component {

    constructor() {
        super()
        this.stat = {
            coin: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (<>
            < div className='coin-wrap'>
                <div>
                    <p>a</p>
                </div>
            </div>
            < div className='coin-wrap'>
                <div>
                    <p>a</p>
                </div>
            </div>
            < div className='coin-wrap'>
                <div>
                    <p>a</p>
                </div>
            </div>
            < div className='coin-wrap'>
                <div>
                    <p>a</p>
                </div>
            </div>
        </>
        );
    }
}

export default Main;
