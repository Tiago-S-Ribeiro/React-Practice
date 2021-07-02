import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state){
            //Tecnically we CAN'T NEVER mutate the state directly. 
            //Altho it seems I'm editing state directly, behind the scenes that state is not really being mutated. 
            //Redux toolkit captures this code, and uses Immer (another 3rd library) to translate it into a muttable 
            //code, it doesn't edit the state, it creates a new one and replaces the old one.
            state.cartIsVisible = !state.cartIsVisible; 
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;