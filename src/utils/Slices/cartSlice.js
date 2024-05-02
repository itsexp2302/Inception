import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },

    reducers : {
        addItem : (state,action) => {
            //Vanilla(older) Redux - Dont Mutate STATE , returning is mandatory
            //const newState = [...state];
            //newState.items.push(action.payload)
            //return newState;

            //RTK - uses immer.js 
            state.items.push(action.payload)
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {

            //state = [] ; it will not mutate the state;
            // return { items : [] } will work . It will replace the original state and return the new State
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;