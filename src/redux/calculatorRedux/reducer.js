import { LOAD_ANS, LOAD_BACKSPACE, LOAD_BUTTONS, LOAD_CLEAR } from "./actionTypes";
import Mexp from 'math-expression-evaluator';

/* reducers: these are functions that implement the 
behavior of the actions. They change the state of the app, 
based on the action description and the state change description. */

let initialState = {
    number: "",
    ans: ""
}

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BUTTONS:
            return {
                ...state,
                ...action.payload,
                number: state.number.concat(action.payload)
            }
        case LOAD_ANS:
            try {
                // function calculate(expression) {
                //     return new Function('return ' + expression)();
                // }    This is working fine, but to remove eslint I depends on library i.e math-expression-evaluator
                const mexp = new Mexp();
                const computedVal = mexp.eval(state.number).toString();
                // const computedVal = eval(state.number).toString();      eval() method is dangarous to use,
                // Above method is alternative to eval()
                return {
                    ...state,
                    ...action.payload,
                    ans: computedVal,
                    number: computedVal
                }
            } catch(err) {
                return {
                    ...state, 
                    ...action.payload,
                    ans: 'Error',
                    number: 'Error'
                }
            }
        case LOAD_CLEAR:
            return {
                ...state,
                ...action.payload,
                number: '',
                ans: ''
            }
        case LOAD_BACKSPACE:
            return {
                ...state,
                ...action.payload,
                number: (state.number).slice(0, -1),
                ans: ''
            }
        default:
            return state
    }
}

export {initialState, calculatorReducer}