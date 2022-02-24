//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import Actions


//import elements
import {  Grid, Input, Image, Text } from "../elements" 

//import Mui
import Avatar from '@mui/material/Avatar';
import { Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';

//import Icon
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';



// impot Component
import Write from "./Wirte";
import LoginSnackbar from "./LoginSnackbar"
import LogoutSnackbar from "./LogoutSnackbar";

//import Actions
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";



const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state=>state.user);
    const _post = useSelector(state=>state.post);

    // console.log(_user);
    // console.log(_post);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    ////snackbar
    const [snackbar,setSnackbar] = React.useState(false);
    const snackbarClick = () => {
        setSnackbar(true);
    };
    const snackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar(false);
    };
    const [logoutSnackbar,setLogoutSnackbar] = React.useState(false);
    const logoutSnackbarOpen = () => {
        setLogoutSnackbar(true);
    };
    const logoutSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setLogoutSnackbar(false);
    };
    


    const [Mopen, setOpen] = React.useState(false);
    const handleOpen = () => {
        if(!_user.is_login){
            setSnackbar(true);
            navigate('/login');
        }else{
        setOpen(true);}
        
    }

    const MhandleClose = () => {
            setOpen(false);
        }

    const logout =() =>{
        logoutSnackbarOpen();
        dispatch(userActions.logoutUser());
    }

    
    React.useEffect(async() => {
        if(!_user.is_login)
            dispatch(userActions.loginCheck());
        dispatch(userActions.getUsers());
        dispatch(postActions.getPost());
    },[]);
    
    return(
        <React.Fragment>
            <Grid margin="0" padding="0px" B_bottom="1px solid #dbdbdb" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="57px" BG_c="#fff" width="100%" justify_content="space-between" is_flex padding="4px 16px">
            
            <Grid padding="0 20px" width ="70%" max_width='960px' height='57px' BG_c="" margin='0 auto' is_flex justify_content='space-between' >
                <div onClick={()=>{navigate('/')}}>
                    <img width={"120px"} alt="instagram letter Logo" src="/Logo/Logo5.png"/>
                </div>
                <Grid is_flex flex_direction="row">
                    <Tooltip title="Main"><IconButton sx={{width:"50px", height : "50px"}} onClick={()=>{navigate("/")}} ><HomeOutlinedIcon sx={{ margin :"10px"}}/></IconButton></Tooltip>
                    <Tooltip title="follow"><IconButton sx={{width:"50px", height : "50px"}} onClick={()=>{navigate("/follow")}} ><GroupOutlinedIcon sx={{ margin :"10px"}}/></IconButton></Tooltip>    
                    <Tooltip title="Add Post"><IconButton sx={{width:"50px", height : "50px"}} onClick={_user.is_login?handleOpen:snackbarClick}><AddBoxOutlinedIcon  sx={{ margin :"10px"}}/></IconButton></Tooltip>    
                    {_user.is_login?
                    <Tooltip title="My Menu">
                    <IconButton
                    sx={{width:"50px", height : "50px"}}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                        <Avatar sx={{ margin :"10px"}} alt="Remy Sharp" src={_user.user.userProfileUrl}/>
                    </IconButton>
                    </Tooltip>
                    :<Tooltip title="Log In"><IconButton sx={{width:"50px", height : "50px"}} onClick={()=>{navigate('/login')}}><LoginIcon  sx={{ margin :"10px"}}/></IconButton></Tooltip>}
                </Grid>
            </Grid>
            </Grid>
            <Grid margin = "57px"/>

            <Menu
                sx={{height:"120px",padding:"0px"}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={{margin:"0px", fontSize:"12px"}} onClick={()=>{navigate(`/userpage/${_user.user.userKey}`)}}>Profile</MenuItem>
                <MenuItem sx={{margin:"0px", fontSize:"12px"}} onClick={logout}>Logout</MenuItem>
            </Menu>
            <Modal
            open={Mopen}
            onClose={MhandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Grid width="100vw" height="100vh" is_flex justify_content="center" align_items="center" position="relative" >
                <Grid position='fixed' top="0" right="0">
                <CloseIcon sx={{ color: 'white', fontSize: 40 }} onClick={MhandleClose}/>
                </Grid>
                
                <Write/>
                
            </Grid>
            </Modal>

            <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'center'}} open={snackbar} autoHideDuration={2000} onClose={snackbarClose}>
                <div><LoginSnackbar/></div>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'center'}} open={logoutSnackbar} autoHideDuration={2000} onClose={logoutSnackbarClose}>
                <div><LogoutSnackbar/></div>
            </Snackbar>

        </React.Fragment>
    );

}


export default Header;