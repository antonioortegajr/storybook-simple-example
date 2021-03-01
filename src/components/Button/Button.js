import React from 'react';
import './buttonStyles.css';

const Button = (props) => {
    return (
      <button class={props.class}>
        {props.txt}
      </button>
    );
}

export default Button