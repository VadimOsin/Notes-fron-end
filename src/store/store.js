import { createStore } from 'redux';
import {reducer} from "./reducers/postReducer";

export const store = createStore(reducer);