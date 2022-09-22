import { createSlice } from '@reduxjs/toolkit';
import Employee from '../models/Employee';


const EmpSlice = createSlice({

    name: `emp`, // identifier for this slice 

    initialState: {
        // empObj: new Employee()
        empObj: new Employee(101, `Sonu`, 10.5),
        empObj2: new Employee(102, `Monu`, 10.6)

    },  // like default values 

    reducers: {

        getEmpById: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.empObj = action.payload;
        }

    } // methods for data access 
});

export const { getEmpById } = EmpSlice.actions;


export default EmpSlice.reducer;
