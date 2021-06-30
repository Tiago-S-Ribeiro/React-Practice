//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

// export const INCREMENT = 'increment';
// export const INCREASE = 'increase';
// export const DECREMENT = 'decrement';
// export const TOGGLE = 'toggle';


// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement'){
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

//const store = createStore(counterReducer);