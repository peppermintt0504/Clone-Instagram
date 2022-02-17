import React from "react";
import styled from "styled-components";

const Input = (props) => {

    //Border category
    const { Border, B_radius, } = props;
    
    //size, position category
    const { rows, width, height, margin, padding } = props;
    
    //setting, event category
    const { label, _onChange, _defaultValue, _ref , type, value, placeholder } = props;

    //kind of input
    const { is_textarea } = props;

    //children
    const { children } = props;


    const styles ={
        Border,
        B_radius,

        rows,
        width,
        height,
        margin,
        padding,
    }

    if(is_textarea){
        return (
            <div>

            <P>{label}</P>
            <Wrap>
                <TA
                rows={rows}
                onChange = {_onChange}
                defaultValue={_defaultValue}
                ref={_ref}
                type = {type}
                value={value}
                placeholder = {placeholder}
                {...styles}></TA>
            </Wrap>
        </div>
        )
    }

    return (
        <div>

            <P>{label}</P>
            <Wrap>
                <In
                rows={rows}
                onChange = {_onChange}
                defaultValue={_defaultValue}
                ref={_ref}
                type = {type}
                value={value}
                placeholder = {placeholder}
                {...styles}></In>
            </Wrap>
        </div>
    );
}

Input.defaultProps ={
    label : null,
    onChange : false,
    placeholder : null,
    type : "text",

    Border : "1px gray solid",
    B_radius : null,

    rows : "1",
    width : "100%",
    height : "40px",
    margin : "auto",
    padding : null,

    is_textarea : false,

};

const Wrap = styled.div`
    justify-content : center; 
    display : flex;
    flex-wrap : wrap;
    align-items : center;
    
`;

const In = styled.input`
    border : ${props=> props.Border};
    border-radius : ${props => props.B_radius};

    justify-content : center; 
    
    height : ${props => props.height};
    width : ${props => props.width};
    margin :  ${props => props.margin};
    padding : ${props => props.padding};
    box-sizing : border-box;
`;

const TA = styled.textarea`
    border : ${props=> props.Border};
    border-radius : ${props => props.B_radius};

    justify-content : center; 
    
    height : ${props => props.height};
    width : ${props => props.width};
    margin :  ${props => props.margin};
    padding : ${props => props.padding};
    box-sizing : border-box;
`;

const P = styled.div`
    font-size : 12px;
    margin : 1px
`;

export default Input;