import React from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types'


// content of component
function Button(props){
    return (
        <button className={style.Button} 
                onClick = {(event) => {
                props.onButtonClicked();
                
            }}
            style = {{
                    ...props.styleDuButton, 
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
    styleDuButton: PropTypes.object,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func,
    type: PropTypes.string
}

Button.defaultProps = {
    bgcolor: 'skyblue',
    color: 'white',
    type: 'button'

}

// exportation
export default Button;