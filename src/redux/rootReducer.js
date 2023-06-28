import { calculatorReducer } from "./calculatorRedux/reducer";
import { combineReducers } from 'redux';

// let rootReducer = combineReducers({
//     todos: todoReducer,
//     couter: couterReducer,
//     ...etc
// })


let rootReducer = combineReducers({
        calculator: calculatorReducer
});

export {rootReducer}