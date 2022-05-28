import { createSlice } from "@reduxjs/toolkit";

//action structure {type:"",obj:{}}
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
            const id = state.findIndex(ele=>ele.name===action.payload.name);
            state = state[id].msg.push({message: action.payload.msg, date: action.payload.date});
        },
        DeleteMsg(state, action)
        {
            const id = state.findIndex(ele=>ele.name===action.payload.name);
            const i = state[id].msg.findIndex(ele=>ele.message===action.payload.message);
            state[id].msg = state[id].msg.filter((_,ind)=>ind!==i);
        }
    }
});

export const { AddNewUser, AddMsg, DeleteMsg, DeleteUser  } = MainReducer.actions;
export default MainReducer.reducer;