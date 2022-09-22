import { createSlice } from '@reduxjs/toolkit';
import Employee from '../models/Employee';


const EmpSlice = createSlice({

    name: `emp`, // identifier for this slice 

    initialState: {

        empObj: new Employee(),
        empList: []
    },

    reducers: {

        setEmployee: (state, action) => {
            console.log(action.payload);
            state.empObj = action.payload;
        }
        // more methods here 

    } // methods for data access 
});

export const { setEmployee } = EmpSlice.actions;


export default EmpSlice.reducer;
