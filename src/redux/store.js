import { rootReducer } from "./rootReducer";
// import { createStore } from "redux";  
// It is deprecated and ConfigureStore came inplace of it.
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';


/* store: it brings the actions and reducers together, 
holding and changing the state for the whole app — 
there is only one store. */

export const store = createStore(rootReducer);
