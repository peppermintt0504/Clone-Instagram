//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import {  Grid, Input, Image, Text, Button } from "../elements" 

//import Mui
import Avatar from '@mui/material/Avatar';


//import Icon
import CheckIcon from '@mui/icons-material/Check';

// impot Component
import Img from './Img';


//import Actions
import { actionCreators as postActions } from "../redux/modules/post";

//import axios
import instance from "../shared/Request";


const Edit = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);
    console.log(props);


    const contents = React.useRef();

    const [preview,setPreview] = React.useState([]);


        
    

    const editPost = () =>{
        const changedData={
            postContents:contents.current.value,
            postTag:[],
        }
        dispatch(postActions.editPost(props.postKey,changedData));

    }

    
    React.useEffect(async() => {

    },[]);
    
    return(
        <React.Fragment>
            <Grid >
                <Grid B_bottom="1px solid #dbdbdb" is_flex min_width="648px" max_width="min(calc(100vw - 72px),1151px)" width="1151px" justify_content="space-between" height="42px" BG_c="">
                    <Grid width="42px" height="42px" B_top_left_radius="15px" BG_c="white"/>
                    <Grid is_flex width="100%" height="42px" BG_c="white" justify_content="center" vertical_align= "middle" align_items="center"><Text vertical_align= "middle">새 게시물 만들기</Text></Grid>
                    <Grid width="42px" height="42px" B_top_right_radius="15px" BG_c="white">
                        <Button margin="7px 0 0 0" border="0px" BG_color="white" width="30px" _onClick={editPost}><CheckIcon/></Button>
                    </Grid>
                </Grid>
                <Grid
                    is_flex
                    flex_direction="row"
                    justify_content="center"
                    align_items="center"
                    min_width="648px"
                    min_height="348px"
                    max_width="min(calc(100vw - 72px),1151px)"
                    max_height="min(calc(100vw - 372px),855px)"
                    width="1151px"
                    height="calc(100vmin - 219px)"
                    B_bottom_left_radius="15px" B_bottom_right_radius="15px"
                    BG_c="white">
                        <Img imgURL={props.postImg} size="max(348px,min(calc(100vmin - 219px),min(calc(100vw - 372px),855px)))"></Img>
                        <Grid is_flex flex_direction="column"width="100%"  >
                            <Grid is_flex justify_content="flex-start" min_width="300px" width="100%" >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={_user.user.userProfileUrl?_user.user.userProfileUrl:""}
                                    sx={{ margin: "20px", width: 50, height: 50 }}
                                />
                                <Text>{_user.user.loginId?_user.user.loginId:""}</Text>
                            </Grid>
                            <TextArea defaultValue={props.postContents} ref={contents} rows="10" wrap="hard">

                            </TextArea>
                            
                        </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );

}

const TextArea = styled.textarea`
    width : 90%;
    height : 300px;
    border : 0px;
    font-size : 16px;
    line-height : 24px;
    &:focus-visible{
        outline-color : white;
    }
`;

export default Edit;