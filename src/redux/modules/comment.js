import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import moment from "moment";


//API
import { RESP } from "../../shared/tempAPI"
import instance from "../../shared/Request";


//action
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const LOADING = "LOADING";


//action creatos
const setComment = createAction(SET_COMMENT, (comment_list,postKey) => ({comment_list,postKey}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({comment_data}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


//initialState
const initialState = {
  list: {},
};


//middleware actions
const getComment = (postKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");
    console.log(postKey)

    if(token){
        instance({
            method : "get",
            url : `/posts/${postKey}/comment`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          dispatch(setComment(res.data.data.commentList,postKey))
          console.log(res);
        })
    }
  }
}

const addCommentData = (postKey,comment) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");
    console.log(postKey)

    if(token){
        instance({
            method : "post",
            url : `posts/${postKey}/comment`,
            data : {commentContents:comment},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          console.log(res)
        }).catch((err)=>{
          console.log(err);
          window.alert()
        })
    }
  }
}

const delCommentData = (postKey,commentKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");
    console.log(postKey)

    if(token){
        instance({
            method : "post",
            url : `posts/${postKey}/comment`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          console.log(res)
        }).catch((err)=>{
          console.log(err);
          window.alert()
        })
    }
  }
}


//reducer
export default handleActions(
  {
      [SET_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        draft.list[action.payload.postKey] = [...action.payload.comment_list];
      }),


      [ADD_COMMENT]: (state, action) => 
      produce(state, (draft)=> {
        draft.list.push(action.payload.comment_data);
      }),

      [LOADING]: (state, action) => 
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      })
  },
  initialState
);


const actionCreators = {
  getComment,
  addCommentData,

};


export { actionCreators };