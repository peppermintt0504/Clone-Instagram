import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { useNavigate } from "react-router-dom";


//API
import { RESP } from "../../shared/tempAPI";
import instance from "../../shared/Request";

//cookie
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import { set } from "lodash";

//action

const LOG_OUT = "LOG_OUT";
const GET_USERS = "GET_USERS";
const SET_USER = "SET_USER";
const SECRET ="SECRET";
const FOLLOW = "FOLLOW";



//action creatos
const setUser = createAction(SET_USER, (user , token) => ({ user, token }));
const get_users = createAction(GET_USERS, ( user_list ) => ({ user_list }));
const logOut = createAction(LOG_OUT, (  ) => ({  }));
const follow_user = createAction(FOLLOW, ( userKey ) => ({ userKey }));

//initialState
const initialState = {
    is_login : false,
    user : {
        follow : [],
        follower : [],
        loginId : "",
        userKey : -1,
        userProfileUrl : "",
    },
    user_list : [],
    token : "",
};


//middleware actions

const loginUser=(loginData) =>{
    return async function (dispatch,getState){
        let token = "";
        instance.post('/user/login',loginData).then((res) =>{
            token = res.headers.authorization;
            setCookie("is_login",token);
            instance({
                method : "get",
                url : "/user/myinfo",
                data : {},
                headers : {
                    "Content-type" : "application/json;charset-UTF-8",
                    authorization: token,
                }
            }).then(res=>{
                const _user = {
                    follow : res.data.data.follow,
                    follower : res.data.data.follower,
                    loginId : res.data.data.loginId,
                    userKey : res.data.data.userKey,
                    userProfileUrl : res.data.data.userProfileUrl,
                }
                dispatch(setUser(_user,token));
                window.location.assign("/");
            })
        }).catch((err) => {
            window.alert("로그인에 실패하였습니다.")
        })
    }
}

const getUsers=() =>{
    return async function (dispatch,getState){
        const Auth = getCookie("is_login");

        instance({
            method : "get",
            url : "/users",
            data : {},
            headers : {
                "Content-type" : "application/json;charset-UTF-8",
                authorization: Auth,
            }
        }).then(res=>{
            dispatch(get_users(res.data.data.userList))
        })
    }
}

const loginCheck=() =>{
    return async function (dispatch,getState){
        const Auth = getCookie("is_login");
    
        if(Auth !== undefined){
            instance({
                method : "get",
                url : "/user/myinfo",
                data : {},
                headers : {
                    "Content-type" : "application/json;charset-UTF-8",
                    authorization: Auth,
                }
            }).then(res=>{
                const _user = {
                    follow : res.data.data.follow,
                    follower : res.data.data.follower,
                    loginId : res.data.data.loginId,
                    userKey : res.data.data.userKey,
                    userProfileUrl : res.data.data.userProfileUrl,
                }
                dispatch(setUser(_user,Auth));
            }).catch( err=>{
            })
        }
        else{
        }

    }
}

const logoutUser=() =>{
    return async function (dispatch,getState){
        deleteCookie("is_login");
        dispatch(logOut());

    }
}



const followUser=(userKey) =>{
    return async function (dispatch,getState){
        const Auth = getCookie("is_login");

        if(Auth !== undefined){
            instance({
                method : "post",
                url : `/user/${userKey}/follow`,
                data : {},
                headers : {
                    "Content-type" : "application/json;charset-UTF-8",
                    authorization: Auth,
                }
            }).then(res=>{
                dispatch(follow_user(userKey))
            })

        }
    }
}


//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.is_login=true;
            draft.token = action.payload.token;
            draft.user = action.payload.user;
        }),
        [GET_USERS]: (state, action) =>
        produce(state, (draft) => {
            draft.user_list = [...action.payload.user_list];
        }),
        [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
            draft.is_login=false;
            draft.user = {};
        }),
        [FOLLOW]: (state, action) =>
        produce(state, (draft) => {
            console.log(state.user.follow.reduce((x,v,i)=> v===action.payload.userKey?true:x,false))
            const index = state.user_list.reduce((x,v,i)=> v.userKey===action.payload.userKey?i:x,"");

            if(state.user.follow.reduce((x,v,i)=> v===action.payload.userKey?true:x,false)){
                draft.user.follow.pop(action.payload.userKey);
                draft.user_list[index].follower.pop(state.user.userKey);
            }
            else{
                draft.user.follow.push(action.payload.userKey);
                draft.user_list[index].follower.push(state.user.userKey);
            }

        }),


    },
    initialState
);


//action creator export
const actionCreators = {
    loginUser,
    logoutUser,
    loginCheck,
    getUsers,
    followUser,

};

export { actionCreators };