import React from 'react';
import Header from './component/Header/header';
import "./App.css"
import Navigate from './component/Navigation/Navigation';


function App() {
  return (
    <div className="app">
      <div className="app-header">
        <div className='header-wrap'>
          <div><Header /></div>
          <div style={{display:'flex', flexDirection:'row-reverse'}}><Navigate /></div>
        </div>   
      </div>
    </div>
  );
}

export default App;
