import React from 'react';
import classes from './Input.module.css';

const input = (props) =>{ 
    let inputElement =null;
    let validationError = null;

    const inputClasses=[classes.InputElement];

    if(props.invalid && props.touch){
        inputClasses.push(classes.Invalid);
        validationError = <p>Please enter a valid {props.valueType}</p>;    
    }

    switch ( props.elementType){
        case ('input'):
            inputElement= <input 
            className={inputClasses.join(' ')}
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement= <textarea
            className={inputClasses}
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}/>;
            break;
        default :
             inputElement= <input 
             className={inputClasses}
             {...props.elementConfig} 
             value={props.value}
             onChange={props.changed}/>
    }
    
    return (
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
        {validationError}
    </div>

    );
};

export default input;