import {ADD_TODO, REMOVE_TODO, READ_DATA} from './ActionTypes';

export const AddTodo = payload => ({type: ADD_TODO, payload});
export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});

export const ReadData = payload => ({
  type: READ_DATA,
  payload,
});
