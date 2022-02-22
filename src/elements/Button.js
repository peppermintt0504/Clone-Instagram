import React from "react";
import styled from "styled-components";


const Button = (props) => {

    //Border category
    const { border, B_radius,   } = props;
    
    //Background category
    const { BG_color, box_shadow,   } = props;
    
    //font category
    const { font_color, font_size, font_weight  } = props;
    
    //size, position category
    const { width, height, margin, padding , position, top, right, bottom,  } = props;


    //event category
    const { _ref , _onClick, disabled, } = props;
    
    //text category
    const { text, children} = props;


    const {  } = props;





    const sytles = {
        border,
        B_radius,

        BG_color,
        box_shadow,

        font_color, font_size, font_weight,

        position,
        top, 
        right, bottom,

        width,
        height,
        margin,padding,

    }

    
    return (
    <div>
        <Btn {...sytles} ref={_ref} onClick={()=>_onClick()} disabled={disabled}>{text}{children}</Btn>
    </div>
    );
}


Button.defaultProps ={

    height : "30px",
    width : "100px",
    margin : null, padding :null,

    position : null,
    top : null,
    right : null,
    bottom : null,

    text : null,
    _onClick : false,
    disabled : false,
    _ref:null,
    

};

const Btn = styled.button`

    border :            ${props => props.border};
    border-radius :     ${props => props.B_radius};
    
    background-color :  ${props => props.BG_color};
    box-shadow :        ${props => props.box_shadow};
    
    font-size :         ${props => props.font_size};
    font-weight :       ${props => props.font_weight};
    color :             ${props => props.font_color};
    
    height :            ${props => props.height};
    width :             ${props => props.width};
    margin :            ${props => props.margin};
    padding :           ${props => props.padding};

    position :          ${props => props.position};
    top :               ${props => props.top};
    bottom :            ${props => props.bottom};
    right :             ${props => props.right};
    cursor : pointer;
`;


export default Button;