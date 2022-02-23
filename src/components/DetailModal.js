//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

//import Actions


//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon


// impot Component
import Detail from "./Detail";

//import Actions
import { actionCreators as staticActions } from "../redux/modules/static";

//import axios


export default function DetailModal(props) {
    const dispatch = useDispatch();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);
    const _static = useSelector(state=>state.static);

    console.log(props);
    
    const thisPost = _post.list.reduce((x,v,i)=>  v.postKey===props.postKey?v:x,"");
    


    const handleClose = () => dispatch(staticActions.openMadal(_static.modal));

    React.useEffect(()=>{
        
    },[])


    return (
            <Modal
            open={_static.modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div>
                <Detail postKey={props.postKey}/>
                <Grid position= "absolute" right="0">
                <CloseIcon sx={{ color: 'white', fontSize: 40 }} onClick={handleClose}/>
                </Grid>
            </div>
            </Modal>
    );

}