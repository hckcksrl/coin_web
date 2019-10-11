import React, { Component } from 'react';
import Main from "../Main/main";
import axios from "axios";
import queryString from "query-string";

class Search extends Component {
    _isMounted = false

    constructor() {
        super()
        this.state = {
            coin: []
        }
    }

    componentDidMount() {
        this._isMounted = true
        const name = queryString.parse(this.props.location.search)
        axios.get(`http://127.0.0.1:8000/search?name=${name.coin_name}`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        coin: response.data
                    })
                }
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        let { coin } = this.state
        return (
            <div className='main'>
                {coin.map((result, index) => {
                    return <Main data={result} key={index} css={'search'} />
                })}
            </div>
        );
    }
}
export default Search;
