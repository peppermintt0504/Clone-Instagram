import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import moment from 'moment';

//API
import instance from "../../shared/Request";


//action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LIKE_POST = "LIKE_POST";
const DEL_POST = "DEL_POST";
const UPDATE_POST = "UPDATE_POST";

//action creatos

const set = createAction(SET_POST, (Post_list) => ({ Post_list }));
const like = createAction(LIKE_POST,(postKey,userKey) => ({postKey,userKey}));
const add = createAction(ADD_POST, (Post_data) => ({ Post_data }));
const del = createAction(DEL_POST, (Post_data) => ({ Post_data }));
const update = createAction(UPDATE_POST, (Post_data) => ({ Post_data}));

//initialState
const initialState = {
    list : [],
};


//middleware actions
const getPost=() =>{
    return async function (dispatch,getState){
        const token = getCookie("is_login");

        if(token){
            instance({
                method : "get",
                url : "/posts",
                data : {},
                headers : {
                    "Content-Type": "application/json;charset-UTF-8",
                    authorization: token,
                }
            }).then(res =>{
                dispatch(set(res.data.data.postList))
            })
        }
    }
}

const addPost=(post_data) =>{
    return async function (dispatch,getState){
        const token = getCookie("is_login");

        if(token){
            instance({
                method : "post",
                url : "/posts",
                data : post_data,
                headers : {
                    "Content-Type": "multipart/form-data",
                    authorization: token,
                }
            }).then(res =>{
                window.alert("정상적으로 게시물이 작성되었습니다.")
                window.location.reload();
            }).catch(err=>{
                window.alert("게시물이 실패하였습니다.")
            })
        }
    }
}

const likePost=(postKey,userKey) =>{
    return async function (dispatch,getState){
        const token = getCookie("is_login");

        if(token){
            instance({
                method : "post",
                url : `/posts/${postKey}/like`,
                data : {},
                headers : {
                    "Content-Type": "application/json;charset-UTF-8",
                    authorization: token,
                }
            }).then(res =>{
                dispatch(like(postKey,userKey));
                
            })
        }
    }
}

const editPost=(postKey,editData) =>{
    return async function (dispatch,getState){
        const token = getCookie("is_login");

        if(token){
            instance({
                method : "put",
                url : `/posts/${postKey}`,
                data : editData,
                headers : {
                    "Content-Type": "application/json;charset-UTF-8",
                    authorization: token,
                }
            }).then(res =>{
                window.alert("수정이 완료되었습니다.");
                window.location.reload();
            })
        }
    }
}

const delPost=(postKey) =>{
    return async function (dispatch,getState){
        const token = getCookie("is_login");

        if(token){
            instance({
                method : "delete",
                url : `/posts/${postKey}`,
                data : {},
                headers : {
                    "Content-Type": "application/json;charset-UTF-8",
                    authorization: token,
                }
            }).then(res =>{
                console.log(res.data);
                
            })
        }
    }
}


//reducer
export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.list = [...action.payload.Post_list];
        }),
        [LIKE_POST]: (state, action) =>
        produce(state, (draft) => {
            const index = state.list.reduce((x,v,i) => v.postKey === action.payload.postKey?i:x,"");
            const is_include = state.list[index].postLike.reduce((x,v,i)=>v===action.payload.userKey?true:x,false);

            if(is_include){
                draft.list[index].postLike.pop(action.payload.userKey);
            }else{
                draft.list[index].postLike.push(action.payload.userKey);
            }
        }),
        [ADD_POST]: (state, action) =>
        produce(state, (draft) => {
            draft.list.push(action.payload.diary_data);
        }),
        [DEL_POST]: (state, action) =>
        produce(state, (draft) => {
            window.alert('데이터가 삭제되었습니다');
            draft.list = state.list.filter((v,i) => v.diary_uid !== action.payload.diary_data.diary_uid);
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    getPost,
    addPost,
    likePost,
    delPost,
    editPost,
};

export { actionCreators };