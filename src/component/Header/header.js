import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <header>
        <div className="coin-header">
          <div className="header-logo">
            <NavLink to="/">CoinPrice</NavLink>
          </div>
          <div className="header-coin">
            <NavLink to="/bithumb">빗썸</NavLink>
            <NavLink to="/upbit">업비트</NavLink>
            <NavLink to="/coinone">코인원</NavLink>
            <NavLink to="/korbit">코빗</NavLink>
          </div>
          <div className="header-search">
            <form action="/search" className="header-form">
              <input
                type="text"
                placeholder="ex) btc,xrp"
                className="search"
                name="coin_name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button className="button button4">Search</button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
