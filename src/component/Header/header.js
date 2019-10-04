import React, { Component } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

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
            <form>
              <input type="text" placeholder="Search" style={{ marginRight: 10, padding: 5, borderRadius: 5, width: '10em', height: '2em' }} />
              <button style={{ width: '5em', borderRadius: 5 }}>Search</button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
