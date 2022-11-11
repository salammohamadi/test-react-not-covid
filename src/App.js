import React from 'react';
import './App.css';

function App() {
  const [btnDisabled, setBtnDisabled] = React.useState(false);
  const [bgColor,setBgColor] = React.useState('red');

  const newBgColor = bgColor === 'red' ? 'blue' :'red';  
  
  const clickHandler = () => setBgColor(newBgColor);

  return (
    <div>
      <button
        style={{backgroundColor: btnDisabled ? 'gray' : bgColor, color: 'white', borderRadius: '8px'}}
        onClick={clickHandler}
        disabled={btnDisabled}      
      >
        change to {bgColor === 'red' ? 'blue' :'red'}
      </button>
      <label htmlFor="enable-button-checkbox">checkbox</label>
      <input
        type="checkbox"
        id='enable-button-checkbox'
        defaultChecked={btnDisabled}
        onChange={() => setBtnDisabled(!btnDisabled)}
      />
    </div>
  );
}

export default App;
