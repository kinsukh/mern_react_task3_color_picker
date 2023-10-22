import React from 'react';
import './App.css'; 
import ColorPicker from './Components/ColorPicker';

const App = () => {

  return (
    <div >
        <h1>Color Picker</h1>
        <div className="app-container">
          <ColorPicker/>
        </div>
    </div>
  );
};

export default App;
