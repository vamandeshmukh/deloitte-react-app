
// steps to use redux in react app 
// 1. create store 
// 2. provide store to react app (in index.js)
// 3. create slices for compoments 
// 4. invoke slices into components 

// useful links :
// https://redux.js.org/introduction/getting-started
// https://react-redux.js.org/introduction/getting-started
// https://redux-toolkit.js.org/introduction/getting-started


import { configureStore } from "@reduxjs/toolkit";

import empReducer from './EmpSlice';
import comp1Reducer from './Comp1Slice';
import comp2Reducer from './Comp2Slice';


// const store = () => {

// }
console.log(`store initialized...`);

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