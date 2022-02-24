import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import moment from "moment";


//API
import { RESP } from "../../shared/tempAPI"
import instance from "../../shared/Request";


//action
const SET_COMMENT = "SET_COMMENT";
const LIKE_COMMENT = "LIKE_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";



//action creatos
const setComment = createAction(SET_COMMENT, (comment_list,postKey) => ({comment_list,postKey}));
const like = createAction(LIKE_COMMENT, (commentKey,postKey,userKey) => ({commentKey,postKey,userKey}));
const deleteCommnet = createAction(DEL_COMMENT, (commentKey,postKey) => ({ commentKey,postKey }));


//initialState
const initialState = {
  list: {},
};


//middleware actions
const getComment = (postKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");
    console.log(postKey)

    
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
    })
    
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
          })
        }).catch((err)=>{
          console.log(err);
          window.alert("댓글 작성에 실패하였습니다.");
        })
    }
  }
}

const delComment = (postKey,commentKey) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");

    if(token){
        instance({
            method : "delete",
            url : `comments/${commentKey}`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          dispatch(deleteCommnet(commentKey,postKey))
        }).catch((err)=>{
          console.log(err);
          window.alert("댓글 삭제가 실패하였습니다.")
        })
    }
  }
}

const likeComment = (commentKey,postKey,userKey,) => {
  return async function (dispatch,getState){
    const token = getCookie("is_login");

    if(token){
        instance({
            method : "post",
            url : `comments/${commentKey}/like`,
            data : {},
            headers : {
                "Content-Type": "application/json;charset-UTF-8",
                authorization: token,
            }
        }).then(res =>{
          dispatch(like(commentKey,postKey,userKey,))
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


      [LIKE_COMMENT]: (state, action) => 
      produce(state, (draft)=> {
        console.log(state.list[(action.payload.postKey)].reduce((x,v,i)=> v.commentKey===action.payload.commentKey?i:x,""));
        const index = state.list[(action.payload.postKey)].reduce((x,v,i)=> v.commentKey===action.payload.commentKey?i:x,"")
        console.log(state.list[(action.payload.postKey)][index].commentLike.includes(action.payload.userKey));

        console.log(draft.list[(action.payload.postKey)][index].commentLike.filter(v=> v!==action.payload.userKey));
        console.log(draft.list[(action.payload.postKey)][index].commentLike);
        console.log(action.payload.userKey);

        if(state.list[(action.payload.postKey)][index].commentLike.includes(action.payload.userKey)){
          draft.list[(action.payload.postKey)][index].commentLike = [...draft.list[(action.payload.postKey)][index].commentLike.filter(v=> v!==action.payload.userKey)];
        }else{
          draft.list[(action.payload.postKey)][index].commentLike.push(action.payload.userKey);
        }
      }),

      [DEL_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        draft.list[action.payload.postKey] = [...state.list[action.payload.postKey].filter((v,i)=> v.commentKey!==action.payload.commentKey)]
      })
  },
  initialState
);


const actionCreators = {
  getComment,
  addCommentData,
  likeComment,
  delComment,
  

};


export { actionCreators };