import { createSlice } from '@reduxjs/toolkit';
import Employee from '../models/Employee';


const EmpSlice = createSlice({
    name: `emp`, // identifier for this slice 
    initialState: {
        empObj: new Employee()

    },  // like default values 
    reducers: {
        
    } // methods for data access 
});

export { empReducer };

export default EmpSlice;
