import React from 'react';
import './checkBoxStyles.css';

import { useState } from 'react';

function handleChange() {
  alert("Checked state changed");
}

const CheckBox = (props) => {
  const [setCheckBoxState] = useState(''); // '' is the initial state value
  
    return (
      <input type="checkbox" onChange={handleChange}/>
    );
}

export default CheckBox