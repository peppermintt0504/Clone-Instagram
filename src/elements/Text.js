import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const { F_size, F_color, F_weight, F_style, F_decoration, F_align } = props;

    const { cursor } = props

    const { margin, padding, width,  } = props

    const { is_flex, flex_direction,flex_wrap, align_items, justify_content,  } = props

    const { Border, B_radius, B_bottom } = props;

    const { _onClick, children } = props;
    const styles = {
        F_size,
        F_color,
        F_weight, 
        F_style,
        F_decoration,
        F_align,

        is_flex,
        flex_direction ,
        flex_wrap ,
        align_items,
        justify_content,


        Border, 
        B_radius,
        B_bottom,

        margin,
        padding,
        width,

        cursor,
        };

    return (
        <P onClick={_onClick} {...styles}>
            {children}
        </P>
    );
}

Text.defaultProps ={
    F_size : '14px',
    F_color : '#222831',
    F_weight : false,
    F_style : null,
    F_decoration : null,
    F_align: null,

    is_flex :false,
    flex_direction : "row",
    flex_wrap : 'wrap',
    align_items : "center",
    justify_content : null,

    cursor : null,

    Border : null, 
    B_radius : null,
    B_bottom : null,

    margin : null,
    padding : null,
    width: '100%',
    
    _onClick : null,
};

const P = styled.div`
    font-size : ${(props) => props.F_size};
    color : ${(props) => props.F_color};
    font-weight : ${(props) => (props.F_weight)};
    font-style: ${(props) => props.F_style};
    text-decoration : ${props => props.F_decoration};
    text-align : ${props => props.F_align};

    ${(props) => (props.is_flex? `display : flex;`:"")};
    align-items : ${props => props.align_items};
    justify-content:${props => props.justify_content};
    flex-direction :  ${props => props.flex_direction};
    flex-wrap :  ${props => props.flex_wrap};

    border :  ${props => props.Border};
    border-radius :  ${props => props.B_radius};
    border-bottom : ${props => props.B_bottom};


    padding : ${(props) => props.padding};
    margin : ${(props) => props.margin};
    width : ${(props) => props.width};
    
    cursor : ${(props) => props.cursor};
`;

export default Text;