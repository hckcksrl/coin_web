import React from 'react';
import Header from './component/Header/header';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./component/Section/Home"
import Footer from './component/Footer/footer';
import Bithumb from './component/Section/Bithumb'
import Upbit from './component/Section/Upbit';
import Coinone from './component/Section/Coinone';
import Korbit from './component/Section/Korbit';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <section style={{ flexGrow: 1, minHeight: '75%', justifyContent: 'center', display: 'flex' }}>
          <Route exact={true} path="/" component={Home} />
          <Route path='/bithumb' component={Bithumb} />
          <Route path='/upbit' component={Upbit} />
          <Route path='/coinone' component={Coinone} />
          <Route path='/korbit' component={Korbit} />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
