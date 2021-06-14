import React from 'react';
import './selectStyles.css';

import { useState } from 'react';

const Select = (props) => {
  const [setSelect] = useState(''); // '' is the initial state value
  
    return (
      <select onInput={e => setSelect(e.target.value)}>
        <option>one</option>
        <option>two</option>
        <option>three</option>
      </select>
    );
}

export default Select