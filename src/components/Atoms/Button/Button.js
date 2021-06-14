import React from 'react';
import './buttonStyles.css';

import { useState } from 'react';

const Button = (props) => {

  const [inputState] = useState();
  
    return (
      <button class={props.class} onClick={props.func}>
        {props.txt}
      </button>
    );
}

export default Button