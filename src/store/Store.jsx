import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import MainReducer from "../Reducer/MainReducer";
import SecondReducer from "../Reducer/SecondReducer";
import ThirdReducer from "../Reducer/ThirdReducer";

const Store = configureStore({
    reducer: 
    {
      list:MainReducer,
      currentUser: SecondReducer,
      isChat: ThirdReducer
    },
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