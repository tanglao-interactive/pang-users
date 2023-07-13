import React from 'react';
import './App.css';

function App(props: any) {
  const { children } = props
  return (
    <div className="App">
      {children}
    </div>
  );
}

export default App;
