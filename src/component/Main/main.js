import React, { Component } from 'react';
import './main.css'
import PropTypes from 'prop-types'

class Main extends Component {

    constructor() {
        super()
        this.stat = {
            data: [],
            css: undefined
        }
    }

    render() {
        let { data, css } = this.props
        if (data !== null && css === undefined) {
            return (
                <>
                    < div className={`coin-wrap`}>
                        <div>
                            <p>{data.currency}</p>
                            <p>price : {data.price} 원</p>
                            <p>high price : {data.high} 원</p>
                            <p>low price: {data.low} 원</p>
                            <p>{data.volume} 개</p>
                        </div>
                    </div>
                </>)
        } else if (data != null && css != null) {
            return (
                <>
                    < div className={`coin-wrap ${css}`}>
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
            return (<></>)
        }

    }
}

Main.propTypes = {
    data: PropTypes.object.isRequired,
    css: PropTypes.string
}

export default Main;
