import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    //image category
    const { src, } = props;
    
    //shape, size category
    const { shape, size, width, height, margin } = props;
    
    //event category
    const { _onClick, } = props;
    
    //box category
    const { box_shadow } = props;

    //flex category
    const { flex } = props;

    const styles = {
        src,
        size,
        width,
        height,
        margin,
        box_shadow,
        flex,
        
    }
    if(shape === "imageBG"){
        return(
            <ImageBG onClick={_onClick} {...styles}></ImageBG>
        )
    }
    if(shape === "imagePost"){
        return(
            <ImagePost onClick={_onClick} {...styles}></ImagePost>
        )
    }
    if(shape === "circle"){
        return (
            <div>

            
            <ImageCircle onClick={_onClick} {...styles}/>
            </div>
        )
    }
    return (
        <div>
        <ImageDefault onClick={_onClick} {...styles}>
        <Hover>
        </Hover>

        </ImageDefault>

        </div>
    )


}

Image.defaultProps = {
    
    shape: null,
    src: "https://thumb.mt.co.kr/06/2021/03/2021030521582049015_1.jpg/dims/optimize/",
    size: "200",
    width : null,
    height : null,
    margin : "5px",
    flex : null,
};



const ImageDefault = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    margin : ${props => props.margin};
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    z-index: 1;

    flex :  ${props => props.flex};
`;

const Hover = styled.div`
    width : 100%;
    height :100%;
    z-index : 9;

    &:hover {
        
        background-color : rgba(0,0,0,0.3);
    }
`;

const AspectOutter = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    margin : ${props => props.margin};
    //min-width: 400px;
`;

const AspectInner = styled.div`
    width : ${(props)=> props.width};
    height : ${(props)=> props.height};
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;
const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: ${(props) => props.margin}
`;
const ImagePost = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    background-image: url("${(props) => props.src}");
    background-size: cover;   
    background-position: center;
    box-shadow : ${(props) => props.box_shadow}
`;
const ImageBG = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${(props) => props.src}");
    object-fit:cover; 
    background-position: center;
    border: 1px solid #ffec99;
`;

export default Image;