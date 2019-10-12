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
                            <p>price : {data.price.toLocaleString()} 원</p>
                            <p>high : {data.high.toLocaleString()} 원</p>
                            <p>low : {data.low.toLocaleString()} 원</p>
                            <p style={{ color: data.rate < 0 ? "red" : "green" }}>rate : {data.rate}%</p>
                            <p>volume : {data.volume.toLocaleString()} 개</p>
                        </div>
                    </div>
                </>)
        } else if (data != null && css === "search") {
            return (
                <div style={{ flexDirection: 'column', width: '250px', justifyContent: 'center', alignItems: 'center' }}>
                    <p>{data.exchange}</p>
                    <div className={`coin-wrap ${css}-result`}>
                        <div>
                            <p>{data.korean} {data.currency}</p>
                            <p>price : {data.price.toLocaleString()} 원</p>
                            <p>high : {data.high.toLocaleString()} 원</p>
                            <p>low : {data.low.toLocaleString()} 원</p>
                            <p style={{ color: data.rate < 0 ? "red" : "green" }}>rate : {data.rate}%</p>
                            <p>volume : {data.volume.toLocaleString()} 개</p>
                        </div>
                    </div>
                </div>)
        } else if (data != null && css != null) {
            return (
                <>
                    < div className={`coin-wrap card ${css}`}>
                        <div>
                            <p>{data.korean} {data.currency}</p>
                            <p>price : {data.price.toLocaleString()} 원</p>
                            <p>high : {data.high.toLocaleString()} 원</p>
                            <p>low : {data.low.toLocaleString()} 원</p>
                            <p style={{ color: data.rate < 0 ? "red" : "green" }}>rate : {data.rate}%</p>
                            <p>volume : {data.volume.toLocaleString()} 개</p>
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
