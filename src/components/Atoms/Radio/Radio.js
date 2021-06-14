import React from 'react';
import './radioStyles.css';

import { useState } from 'react';

function handleChange() {
  alert("Checked state changed");
}

const Radio = (props) => {
  
    return (
      <input type="radio" onChange={handleChange}/>
    );
}

export default Radio