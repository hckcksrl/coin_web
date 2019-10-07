import React, { Component } from 'react';
import './main.css'
import PropTypes from 'prop-types'

class Main extends Component {

    constructor() {
        super()
        this.stat = {
            data: []
        }
    }

    componentDidMount() {

    }

    render() {
        let { data } = this.props
        if (data != null) {
            return (<>
                < div className='coin-wrap'>
                    <div>
                        <p>{data.currency}</p>
                        <p>price : {data.price} 원</p>
                        <p>high price : {data.high} 원</p>
                        <p>low price: {data.low} 원</p>
                        <p>{data.volume} 개</p>
                    </div>
                </div>
            </>)
        } else {
            return <></>
        }

    }
}

Main.propTypes = {
    data: PropTypes.object.isRequired
}

export default Main;
