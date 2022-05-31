import { createSlice } from "@reduxjs/toolkit";
// import Store from "../store/Store";
//action structure {type:"",obj:{}}
// const currentUser = Store.getState().currentUser;
const MainReducer = createSlice({
    name:"list",
    initialState: [],
    reducers: 
    {
        AddNewUser(state, action)
        {
            console.log(state);
            state = state.push(action.payload);
        },
        DeleteUser(state, action)
        {
            const id = state.findIndex(obj=>obj.name===action.payload.name);
            state = state.filter((_,i)=>i!==id);
        },
        AddMsg(state, action)
        {
            const id = state.findIndex(ele=>ele.name===action.payload.currentUser.name);
            state = state[id].msg.push(action.payload.newMessage);
        },
        DeleteMsg(state, action)
        {
            const id = state.findIndex(ele=>ele.name===action.payload.user.name);
            const i = state[id].msg.findIndex(ele=>ele.time===action.payload.usermsg.time);
<<<<<<< HEAD
            // state[id].msg.findIndex((ele)=>ele.time!==action.payload.usermsg.time);
            state[id].msg.splice(i,1);
=======
            state[id].msg.splice(i,i);
>>>>>>> 3d62f7a (last commit)
        },
        StarUnstar(state, action)
        {
            const id = state.findIndex(ele=>ele.name===action.payload.user.name);
            const i = state[id].msg.findIndex(ele=>ele.time===action.payload.usermsg.time);
<<<<<<< HEAD
            console.log(i);
            state[id].msg[i] = {...state[id].msg[i], starred:!(state[id].msg[i].starred)};
            return state
=======
            state[id].msg[i].starred = !(state[id].msg[i].starred);
>>>>>>> 3d62f7a (last commit)
        }
    }
});

export const { AddNewUser, AddMsg, DeleteMsg, DeleteUser, StarUnstar } = MainReducer.actions;
export default MainReducer.reducer;
