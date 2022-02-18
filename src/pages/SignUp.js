//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { Text,  } from "../elements" 

//import Icon


// impot Component


//import Actions


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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        
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
                    sx={{height : "40px",bgcolor : "primary.main"}}
                    margin="normal"
                    size="small"
                    //required
                    fullWidth
                    id="email"
                    label="사용자 이름"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
                    <TextField
                    sx={{ marginTop:"0px", marginBottom:"0px" ,height : "40px",bgcolor : "primary.main"}}
                    margin="normal"
                    size="small"
                    //required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />

                    <Button
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
                    <Link sx={{width : "60px"}} color="#109df8" href="#" variant="body2">
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