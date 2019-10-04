import React from 'react';
import Header from './component/Header/header';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./component/Home"
import Footer from './component/Footer/footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <section style={{ height: '100%' }}>
          <Route exact={true} path="/" component={Home} />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
