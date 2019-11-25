import React from 'react';
import Routes from './routes';
import Navbar from './componentes/Navbar/Navbar';

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;