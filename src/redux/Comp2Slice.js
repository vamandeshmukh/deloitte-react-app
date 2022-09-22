import { createSlice } from '@reduxjs/toolkit';

const Comp2Slice = createSlice({

    name: `comp2`,

    initialState: {
        data2: 'initial value 2'
    },

    reducers: {

        sendComp2DataToStore: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.data2 = action.payload;
        }
        // more methods here 

    }

});

export const { sendComp2DataToStore } = Comp2Slice.actions;


export default Comp2Slice.reducer;
