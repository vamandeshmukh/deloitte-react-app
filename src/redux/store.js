
// steps to use redux in react app 
// 1. create store 
// 2. provide store to react app (in index.js)
// 3. create slices for compoments 
// 4. invoke slices into components 

import { configureStore } from "@reduxjs/toolkit";

import empReducer from './EmpSlice';
import comp1Reducer from './Comp1Slice';
import comp2Reducer from './Comp2Slice';


// const store = () => {

// }

const store = configureStore({
    reducer: {
        emp: empReducer,
        comp1: comp1Reducer,
        comp2: comp2Reducer
        // blog: blogReducer
        // other reducers for other components 
    }
});

export default store;