import React from "react"
import { Button, Grid, Input, Image, Text } from "../elements" 
import { Typography } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";

//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ClearIcon from '@mui/icons-material/Clear';

import { actionCreators as commentActions } from "../redux/modules/comment";


export default function ChatContents(props) {
    const dispatch = useDispatch();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);
    const _comment = useSelector(state=>state.comment);


    const thisPost = _post.list.reduce((x,v,i)=>  v.postKey===props.postKey?v:x,"");

    const commentUser = _user.user_list.reduce((x,v,i)=>v.userKey===props.userKey?v:x,"");

    const [like, setLike] = React.useState(props.commentLike.includes(_user.user.userKey));


    const likeComment= ()=>{
        setLike(!like);
        dispatch(commentActions.likeComment(props.commentKey));
    }
    const delComment= ()=>{
        
        dispatch(commentActions.delComment(props.postKey,props.commentKey));
    }
        return (
            <Grid is_flex flex_wrap="wrap" align_items="stretch" flex_direction="row" width="400px" padding_left="16px" margin="0px">
                <Grid margin="0px" height="50px" is_flex flex_direction="column"  justify_content="start">
                <Image
                margin="0"
                shape="circle"
                src ={commentUser.userProfileUrl}
                size = "35"
                />
                </Grid>

                <Grid width="297px" margin_left="16px">
                    <Typography variant="body2" color="black" align="justify">
                        <Text><strong>{commentUser.loginId}   </strong>{props.commentContents}</Text>
                    </Typography>
                    
                    {/* <Grid margin_top="10px">
                        <Typography variant="body2" color="text.secondary" align="justify" margin-top="10px">1일전</Typography>
                    </Grid> */}
                </Grid>
                <Grid is_flex flex_direction="column" justify_content="center">
                    <Button _onClick={likeComment} border="0px" BG_color="white" margin="auto" padding="0" height="17px" width="17px">
                        {like?<FavoriteOutlinedIcon fontSize="10px"/>:<FavoriteBorderOutlinedIcon fontSize="10px"/>}
                    </Button>
                </Grid>
                <Grid is_flex flex_direction="column" justify_content="center">
                    <Button _onClick={delComment} border="0px" BG_color="white" margin="auto" padding="0" height="17px" width="17px">
                        {commentUser.userKey===_user.user.userKey?<ClearIcon fontSize="10px"/>:""}
                    </Button>
                </Grid>
            </Grid>
        );
    }