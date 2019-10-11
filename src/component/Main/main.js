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
                            <p>{data.korean} {data.currency}</p>
                            <p>price : {data.price} 원</p>
                            <p>high : {data.high} 원</p>
                            <p>low : {data.low} 원</p>
                            <p>rate : {data.rate}</p>
                            <p>volume : {data.volume} 개</p>
                        </div>
                    </div>
                </>)
        } else if (data != null && css === "search") {
            console.log(data)
            return (
                <div style={{ flexDirection: 'column', width: '250px', justifyContent: 'center', alignItems: 'center' }}>
                    <p>{data.exchange}</p>
                    <div className={`coin-wrap ${css}-result`}>
                        <div>
                            <p>{data.korean} {data.currency}</p>
                            <p>price : {data.price} 원</p>
                            <p>high : {data.high} 원</p>
                            <p>low : {data.low} 원</p>
                            <p>rate : {data.rate}</p>
                            <p>volume : {data.volume} 개</p>
                        </div>
                    </div>
                </div>)
        } else if (data != null && css != null) {
            return (
                <>
                    < div className={`coin-wrap card ${css}`}>
                        <div>
                            <p>{data.korean} {data.currency}</p>
                            <p>price : {data.price} 원</p>
                            <p>high : {data.high} 원</p>
                            <p>low : {data.low} 원</p>
                            <p>rate : {data.rate}</p>
                            <p>volume : {data.volume} 개</p>
                        </div>
                    </div>
                </>)
        }

    }
}

Main.propTypes = {
    data: PropTypes.object.isRequired,
    css: PropTypes.string
}

export default Main;
