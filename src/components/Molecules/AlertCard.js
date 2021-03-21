import React from 'react';
import Button from '../Atoms/Button/Button';
import Input from '../Atoms/Input/Input';
import './alertCardStyles.css';

const AlertCard = (props) => {
    return (
      <div class={props.class}>
      <div class="container">
        <h1>Simple Alert Example</h1>
        <div>
            <Input />
        </div>
        <div>
          <Button txt="Open Alert"></Button>
        </div>
      </div>
    </div>
    );
}

export default AlertCard