import {combineReducers} from 'redux';
import todoReducer from './todoReducer';

const RootReducer = combineReducers({todos: todoReducer});

export default RootReducer;
