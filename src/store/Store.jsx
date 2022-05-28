import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import MainReducer from "../Reducer/MainReducer";

const Store = configureStore({
    reducer: MainReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,        
    })
})

export default Store;

/*
  we added serializableCheck: false 
  beacuse we were getting this error

  redux-saga: A non-serializable value was detected in an action, in the path: type.  Value: ƒ actionCreator() {   var args = [];   for (var _i = 0; _i < arguments.length; _i++) {     args[_i] = arguments[_i];   }   if (prepareAction) 
*/