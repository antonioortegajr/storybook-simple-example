import React from 'react';
import Button from '../Atoms/Button/Button';
import Input from '../Atoms/Input/Input';
import './cardStyles.css';

const Card = (props) => {
    return (
      <div class={props.class}>
      <div class="container">
        <h1>Simple Example</h1>
        <div>
            <Input />
        </div>
        <div>
        <Button txt="test"></Button>
        </div>
      </div>
    </div>
    );
}

export default Card