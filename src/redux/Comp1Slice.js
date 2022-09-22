import { createSlice } from '@reduxjs/toolkit';

const Comp1Slice = createSlice({

    name: `comp1`,

    initialState: {
        data1: 'initial value'
    },

    reducers: {

        sendComp1DataToStore: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.data1 = action.payload;
        }
        // more methods here 

    }

});

export const { sendComp1DataToStore } = Comp1Slice.actions;


export default Comp1Slice.reducer;
