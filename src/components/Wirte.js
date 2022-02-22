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


const Write = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);



    const fileInput = React.useRef();
    const contents = React.useRef();

    const [fileSelected,setFileSelected] = React.useState(false);
    const [preview,setPreview] = React.useState([]);
    const [tempFile,setTempFile] = React.useState([]);


    let tempData= [];
    const formData = new FormData();

    const selectFile =(e) =>{
        
        
        
        const file = fileInput.current.files[0];
        const files = fileInput.current.files;
        setTempFile([...tempFile,files]);
        
        
        for(let i=0;i<files.length;i++){
            formData.append("postImg",files[i]);
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.addEventListener("load",function () {
                tempData.push(reader.result);
                if(tempData.length===files.length){
                    setPreview([...preview,...tempData])
                    setFileSelected(true);
                    console.log(formData);
                }
            }
        )
    }
        
        
        // const reader = new FileReader();    
        // reader.readAsDataURL(file);
        // reader.onloadend =()=>{
        //     setPreview([...preview,reader.result])
        //     formData.append("userProfile",file);
            
        //     // 포스트 작성
        //     const formDataTemp = new FormData();
        //     formDataTemp.append("postImg",file)
        //     formDataTemp.append("postContents","포스트 내용2")
        //     formDataTemp.append("postImgCount",1)
        //     formDataTemp.append("postTag",["안녕","태그"])
        //     dispatch(postActions.addPost(formDataTemp));
            
        // }
        
    }

    const addPost = () =>{
        const postData = new FormData();
        for(let i = 0; i<tempFile[0].length;i++){
            postData.append("postImg",tempFile[0][i]);
            console.log(tempFile[0][i]);
        }
        postData.append("postContents",contents.current.value);
        postData.append("postImgCount",preview.length);
        postData.append("postTag",[]);

        console.log(contents.current.value);
        console.log(tempFile[0]);
        console.log(preview.length);
        dispatch(postActions.addPost(postData));
        

    }

    
    React.useEffect(async() => {

    },[]);
    
    return(
        <React.Fragment>

                    
                    {fileSelected?
                    <Grid >
                        <Grid B_bottom="1px solid #dbdbdb" is_flex min_width="648px" max_width="min(calc(100vw - 72px),1151px)" width="1151px" justify_content="space-between" height="42px" BG_c="">
                            <Grid width="42px" height="42px" B_top_left_radius="15px" BG_c="white"/>
                            <Grid is_flex width="100%" height="42px" BG_c="white" justify_content="center" vertical_align= "middle" align_items="center"><Text vertical_align= "middle">새 게시물 만들기</Text></Grid>
                            <Grid width="42px" height="42px" B_top_right_radius="15px" BG_c="white">
                                <Button margin="7px 0 0 0" Border="0px" BG_color="white" width="30px" _onClick={addPost}><CheckIcon/></Button>
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
                                <Img imgURL={preview} size="max(348px,min(calc(100vmin - 219px),min(calc(100vw - 372px),855px)))"></Img>
                                <Grid is_flex flex_direction="column"width="100%"  >
                                    <Grid is_flex justify_content="flex-start" min_width="300px" width="100%" >
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={_user.user.userProfileUrl?_user.user.userProfileUrl:""}
                                            sx={{ margin: "20px", width: 50, height: 50 }}
                                        />
                                        <Text>{_user.user.loginId?_user.user.loginId:""}</Text>
                                    </Grid>
                                    <TextArea ref={contents} rows="10" wrap="hard">

                                    </TextArea>
                                    
                                </Grid>
                        </Grid>
                    </Grid>
                    :
                    <Grid >
                        <Grid B_bottom="1px solid #dbdbdb" is_flex min_width="348px" max_width="min(calc(100vw - 372px),855px)" width="751px" justify_content="space-between" height="42px" BG_c="">
                            <Grid width="42px" height="42px" B_top_left_radius="15px" BG_c="white"/>
                            <Grid is_flex width="100%" height="42px" BG_c="white" justify_content="center" vertical_align= "middle" align_items="center"><Text vertical_align= "middle">새 게시물 만들기</Text></Grid>
                            <Grid width="42px" height="42px" B_top_right_radius="15px" BG_c="white"/>
                        </Grid>
                    <Grid
                    is_flex
                    flex_direction="column"
                    justify_content="center"
                    align_items="center"
                    min_width="348px"
                    min_height="348px"
                    max_width="min(calc(100vw - 372px),855px)"
                    max_height="min(calc(100vw - 372px),855px)"
                    width="751px"
                    height="calc(100vmin - 219px)"
                    B_bottom_left_radius="15px" B_bottom_right_radius="15px"
                    BG_c="white">
                        <Image width="100px" height="80px" src="/addPost.jpg"/>
                        <Text margin="20px" F_size="22px">버튼을 눌러 사진을 추가하세요</Text>
                        <Button _onClick={()=>{fileInput.current.click()}} font_weight="600" font_color="white" B_radius="5px" Border="0px solid #0095f6" BG_color="#0095f6" width="120px" height="30px" >컴퓨터에서 선택</Button>
                        <input ref={fileInput} onChange={selectFile} type="file" multiple style={{display:'none'}}/>
                    </Grid>
                    </Grid>
                    }


                


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

export default Write;