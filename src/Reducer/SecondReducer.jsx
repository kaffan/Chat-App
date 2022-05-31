import { createSlice } from "@reduxjs/toolkit";

const SecondReducer = createSlice({
    name: "currentUser",
    initialState : {},
    reducers:
    {
        UpdateUser(state, action)
        {
            console.log(state);
            return action.payload;
            // ❌ ERROR: does not actually mutate or return anything new!
            //   state = action.payload
        },
        UpdateMessage(state, action)
        {
            state.msg.push(action.payload);
        },
        ToggleStar(state,action)
        {
            state.msg.map((obj,i)=>
            {
                if(obj.time===action.payload.time)
                {
                    state.msg[i].starred = !(state.msg[i].starred);
                }
            });
            return state;
        },
        DeleteMssg(state,action)
        {
            const i = state.msg.findIndex((ele)=>ele.time===action.time);
            state.msg = state.msg.splice(i,i);
            return state;
        }
    }
});

export const { UpdateUser, UpdateMessage, ToggleStar, DeleteMssg } = SecondReducer.actions;
export default SecondReducer.reducer;
