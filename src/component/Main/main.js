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
        return (
            <div className="coin-wrap">
                < div style={{ flex: 1, height: '400px', marginRight: '25px' }}>
                    <div>
                        <p>a</p>
                    </div>
                </div>
                < div style={{ flex: 1, height: '400px', marginRight: '25px' }}>
                    <div>
                        <p>a</p>
                    </div>
                </div>
                < div style={{ flex: 1, height: '400px', marginRight: '25px' }}>
                    <div>
                        <p>a</p>
                    </div>
                </div>

            </div >
        );
    }
}

export default Main;
