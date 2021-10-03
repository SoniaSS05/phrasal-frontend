import { createStore, applyMiddleware } from "redux";
import { phrasalReducers } from './phrasalReducers';
import thunk from "redux-thunk";

export const store = createStore(phrasalReducers, applyMiddleware(thunk))

