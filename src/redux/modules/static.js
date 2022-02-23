//redux
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//action
const MODAL_OPEN = "MODAL_OPEN";

//action creatos

const modalOpen = createAction(MODAL_OPEN, (is_open) => ({ is_open }));


//initialState
const initialState = {
    modal : false,
};


//middleware actions
const openMadal=(is_open) =>{
    return async function (dispatch,getState){
        dispatch(modalOpen(!is_open));
    }
}

//reducer
export default handleActions(
    {
        [MODAL_OPEN]: (state, action) =>
        produce(state, (draft) => {
            draft.modal = action.payload.is_open;
        }),


    },
    initialState
);


//action creator export
const actionCreators = {
    openMadal,

};

export { actionCreators };