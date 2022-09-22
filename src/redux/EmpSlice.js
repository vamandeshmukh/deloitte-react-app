import { createSlice } from '@reduxjs/toolkit';
import Employee from '../models/Employee';


const EmpSlice = createSlice({

    name: `emp`, // identifier for this slice 

    initialState: {

        empObj: new Employee(),
        empList: []
    },

    reducers: {

        setEmpObj: (state, action) => {
            console.log(action.payload);
            state.empObj = action.payload;
        },
        setEmpList: (state, action) => {
            console.log(action.payload);
            state.empList = action.payload;
        }

        // more methods here 

    } // methods for data access 
});

export const { setEmpObj, setEmpList } = EmpSlice.actions;


export default EmpSlice.reducer;
