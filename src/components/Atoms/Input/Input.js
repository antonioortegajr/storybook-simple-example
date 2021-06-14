import React from 'react';
import './inputStyles.css';
import { useState } from 'react';

const Input = (props) => {
  const [inputState, setInputState] = useState('');

  function setTextChange(txt){
    setInputState(txt)
    props.func(txt)
  }

    return (
      <input class={props.class} value={inputState} onInput={e => setTextChange(e.target.value)}/>
    );
}

export default Input