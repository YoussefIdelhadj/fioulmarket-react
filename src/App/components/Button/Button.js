import React from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types'


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

            type= {props.type}
        >
            {props.text}
        </button>
    );
}

Button.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func,
    type: PropTypes.string
}

// exportation
export default Button;