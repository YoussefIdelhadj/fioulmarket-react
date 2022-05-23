import React from "react";
import style from './Button.module.css';

// content of component
function Button(props){
    console.log(props);
    return (
        <button className={style.Button} 
                onClick = {(event) => {
                props.onButtonClicked();
                
            }}
            style = {{
                   backgroundColor: props.bgcolor ,
                   color: props.color
                }}
        >
            {props.text}
        </button>
    );
}

// exportation
export default Button;