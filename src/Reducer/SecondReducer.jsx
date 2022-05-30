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
        }
    }
});

export const { UpdateUser, UpdateMessage } = SecondReducer.actions;
export default SecondReducer.reducer;