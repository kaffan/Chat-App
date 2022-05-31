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
            state[id].msg.splice(i,i);
        },
        StarUnstar(state, action)
        {
            const id = state.findIndex(ele=>ele.name===action.payload.user.name);
            const i = state[id].msg.findIndex(ele=>ele.time===action.payload.usermsg.time);
            state[id].msg[i].starred = !(state[id].msg[i].starred);
        }
    }
});

export const { AddNewUser, AddMsg, DeleteMsg, DeleteUser, StarUnstar } = MainReducer.actions;
export default MainReducer.reducer;
