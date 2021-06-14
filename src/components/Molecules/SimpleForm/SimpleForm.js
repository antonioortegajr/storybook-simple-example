import React from 'react';
import Button from '../../Atoms/Button';
import Input from '../../Atoms/Input/Input';
import './simpleFormStyles.css';
import { useState } from 'react';

const SimpleForm = (props) => {

  const [inputTextState, setInputTextState] = useState('');

    function alertInputText(){
      alert(inputTextState)
    }

    function setChanged(txt) {
      setInputTextState(txt)
    }
    
  
    return (
      <div class={props.class}>
      <div class="container">
        <h1>Simple Alert Example</h1>
        <div class="simpleFormInput">
            <Input func={setChanged} />
        </div>
        <div class="simpleFormButton">
            <Button txt="Open Alert" func={alertInputText}></Button>
        </div>
      </div>
    </div>
    );
}

export default SimpleForm