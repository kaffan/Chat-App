import { createSlice } from "@reduxjs/toolkit";

const ThirdReducer = createSlice({
    name:"Chat",
    initialState:true,
    reducers:
    {
        ToggleStarState(state, action)
        {
            return action.payload;
        }
    }
});

export const { ToggleStarState } = ThirdReducer.actions;
export default ThirdReducer.reducer;
