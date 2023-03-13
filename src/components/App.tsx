import '../css/styles.css'
import Header from './Header';
import React from 'react';
import { HomePage } from '../pages/HomePage';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
