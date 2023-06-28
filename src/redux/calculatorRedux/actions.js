import { LOAD_ANS, LOAD_BACKSPACE, LOAD_BUTTONS, LOAD_CLEAR } from "./actionTypes";

/* actions: these are objects that should have two properties, 
one describing the type of action, and one describing 
what should be changed in the app state. */

export const loadButtons = (number) => {
    return {
        type: LOAD_BUTTONS,
        payload: number
    }
}

export const loadAnswer = (number) => {
    return {
        type: LOAD_ANS,
        payload: number
    }
}

export const loadClear = (number) => {
    return {
        type: LOAD_CLEAR,
        payload: number
    }
}

export const loadBackspace = (number) => {
    return {
        type: LOAD_BACKSPACE,
        payload: number
    }
}