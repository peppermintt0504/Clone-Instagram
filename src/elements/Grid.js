import React from "react";
import styled from "styled-components";

const Grid = (props) => {

    
    //Border category
    const { B_left, B_right, Border, B_radius, B_bottom, B_top,} = props;

    //box category
    const { box_shadow,box_sizing } = props;

    //Background category
    const { BG_c, } = props;
    
    //flex category
    const { is_flex, flex_direction, flex_wrap, justify_content, align_items } = props;
    
    //size, position category
    const { width, height, max_width, min_width, max_height, min_height,
            margin, padding, 
            position, top, bottom,
            z_index } = props;
        
    //event category
    const {_onClick} = props;
    
    //children category
    const  { children, } = props;
    
    
    const styles = {
        B_left, B_right,
        B_bottom, B_top,
        B_radius,
        Border,

        box_shadow,box_sizing,

        BG_c,

        is_flex,
        flex_direction,
        justify_content,
        align_items,
        flex_wrap,
        
        width, height, max_width, min_width, max_height, min_height,
        margin, padding,
        position,top, bottom,
        z_index,

    };

    return(
        <React.Fragment>
            <GridBox onClick={_onClick} {...styles}>
                {children}
            </GridBox>
        </React.Fragment>
    )
}

//default Props value
Grid.defaultProps ={
    children : null,

    is_flex :false,
    flex_direction : "row",
    flex_wrap : 'nowrap',
    align_items : "center",
    justify_content : null,

    box_shadow : null, box_sizing: true,
    
    BG_c : false,
    
    Border:false,

    width : null, height : null,
    max_width : null, min_width : null, max_height : null, min_height : null,
    padding : false, margin : false,
    position : null, top : null, bottom : null,
    z_index :null,

    _onClick : null,
    
}

const GridBox = styled.div`


    //flex
    ${(props) => (props.is_flex? `display : flex;`:"")};
    align-items : ${props => props.align_items};
    justify-content:${props => props.justify_content};
    flex-direction :  ${props => props.flex_direction};
    flex-wrap :  ${props => props.flex_wrap};

    box-shadow: ${props => props.box_shadow};;

    //size, position
    width : ${props => props.width};
    height : ${props => props.height};
    max-width : ${props => props.max_width};
    min-width : ${props => props.min_width};
    max-height : ${props => props.max_height};
    min-height : ${props => props.min_height};

    padding :${props => props.padding};
    margin : ${props => props.margin};

    position : ${props => props.position};
    top : ${props => props.top};
    bottom : ${props => props.bottom};
    z-index : ${props => props.z_index};

    //border
    border : ${props => props.Border};
    border-left : ${props => props.B_left};
    border-right :  ${props => props.B_right};
    border-top : ${props => props.B_top};
    border-bottom : ${props => props.B_bottom};
    border-radius : ${props => props.B_radius};
    
    //background
    background-color : ${props => props.BG_c};
    box-sizing : ${props => props.box_sizing};
    ${props=> props.box_sizing?"box-sizing :border-box":""};
`;

export default Grid;