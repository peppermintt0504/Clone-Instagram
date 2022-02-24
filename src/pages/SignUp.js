//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import _, { set } from "lodash";

//import Mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import Actions


//import elements
import { Text,  } from "../elements" ;
import {IDCheck,pwdCheck} from "../shared/common";

//import Icon


// impot Component

//import Actions
import { actionCreators as staticActions } from "../redux/modules/static";

//import axios
import instance from "../shared/Request";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}


const theme = createTheme({
    palette: {
        primary: {
            main: '#fafafa',
            button : '#b2dffc',
            border : '#e0e0e0',
        },
    },
});

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _static = useSelector(state=>state.static);

    const [pwdCheck,setPwdCheck] = React.useState(true);
    const [pwdForm,setPwdForm] =React.useState(true);
    const [idForm,setIdForm] =React.useState(true);

    const debounce = _.debounce((k) => dispatch(staticActions.idCheck(k)), 1000);
    const debounce2 = _.debounce((k) => setPwdCheck(k), 500);

    const keyPress = React.useCallback(debounce, []);
    const keyPress2 = React.useCallback(debounce2, []);

    
    const [pwd,setPwd] = React.useState(true);
    
    console.log(_static.is_checked&&pwdCheck);

    
    const checkId = (e) => {
        let _reg = /^[-_.0-9a-zA-Z]{6,15}$/
        console.log(_static.is_checked);
        if(e.target.value===""){
            setIdForm(true)
            return;
        }
        if(!_reg.test(e.target.value)){
            setIdForm(false);
            
        }
        else{
            setIdForm(true);
            keyPress(e.target.value);
        }
    };
    
    const pwdChange= (e)=>{
        let _reg = /^[-_.!0-9a-zA-Z]{6,15}$/

        if(e.target.value===""){
            setPwdForm(true)
            return;
        }
        if(!_reg.test(e.target.value)){
            setPwdForm(false);
            
        }else{
            setPwdForm(true)
            setPwd(e.target.value);
            
        }

        console.log(_reg.test(e.target.value),e.target.value)
    }
    
    const pwdCheckChange= (e)=>{
        if(e.target.value===pwd){
            keyPress2(true);
        }else if(e.target.value===""){
            keyPress2(true);
        }
        else{
            keyPress2(false);

        }
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const signupData = {
            loginId: data.get('loginID'),
            password: data.get('password'),
            passwordCheck: data.get('password'),
        };

        instance.post('/user/signUp',signupData).then((res) =>{
            window.alert("회원가입에 성공하셨습니다.");
            navigate("/login");
        }).catch((err) => {
            console.log(err);
        })

        
    };
    
    return (
    <ThemeProvider theme={theme}>
        <Container sx={{
            bgcolor : "primary.main",
            minWidth : '100vw',
            height: '100vh',
            margin : "0" }}>
            <Box sx={{ paddingTop : 8,}}/>
            <Container sx={{ border : "1px solid", borderColor : "primary.border" , paddingTop : 8, bgcolor : "white" , width : '100vw',height: '550px' }} component="main" maxWidth="xs">
                <CssBaseline />
                
                <Box
                sx={{
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                    <img width={"300px"} alt="instagram letter Logo" src="/Logo/Logo5.png"/>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width : "300px", mt: 1, alignItems: 'center', textAlign: 'center' }}>
                    <TextField
                    sx={{height : (idForm?_static.is_checked?"40px":"60px":"60px") ,bgcolor : "primary.main", }}
                    margin="normal"
                    size="small"
                    error = {!idForm||!_static.is_checked}
                    helperText={idForm?!_static.is_checked?"중복된 아이디입니다.":"":"아이디 형식이 맞지 않습니다."}
                    fullWidth
                    id="loginID"
                    label="사용자 이름"
                    name="loginID"
                    autoComplete="loginID"
                    autoFocus
                    onChange={checkId}
                    />
                    <TextField
                    sx={{ marginTop:"0px", marginBottom:"0px" ,height : "40px",bgcolor : "primary.main"}}
                    margin="normal"
                    size="small"
                    error = {!pwdForm}
                    //required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={pwdChange}
                    />

                    <TextField
                    sx={{ marginTop:"10px", marginBottom:"0px" ,height : "40px",bgcolor : "primary.main"}}
                    margin="normal"
                    size="small"
                    error = {!pwdCheck}
                    helperText={pwdCheck?"":"비밀번호와 다릅니다."}
                    fullWidth
                    name="passwordCheck"
                    label="비밀번호 확인"
                    type="password"
                    id="passwordCheck"
                    autoComplete="current-passwordCheck"
                    onChange={pwdCheckChange}
                    />

                    <Button
                    disabled={_static.is_checked&&pwdCheck?false:true}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ color : 'white' ,bgcolor : 'primary.button', mt: 3, mb: 2 }}
                    >
                    가입
                    </Button>
                </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
            <Container sx={{ marginTop:"30px", border : "1px solid", borderColor : "primary.border" , bgcolor : "white" ,height: '100px' }} component="main" maxWidth="xs">
            <Box
                sx={{
                    
                    marginTop: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent : 'center',
                }}
                >
                
                <Grid sx={{display: 'flex', flexDirection: 'row',}} marginTop={"40px"} item>
                    <Text width="130px" margin="0">계정이 있으신가요?</Text>
                    <Link sx={{width : "60px"}} color="#109df8" href="/login" variant="body2">
                    {"로그인"}
                    </Link>
                </Grid>
            </Box>
            </Container>
        </Container>
    </ThemeProvider>

    );
}


export default SignUp;