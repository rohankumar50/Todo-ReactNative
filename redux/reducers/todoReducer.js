import {ADD_TODO, REMOVE_TODO} from '../actions/todoActions/ActionTypes';

const INITIAL_STATE = {todos: []};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, action.payload]};
      break;

    case REMOVE_TODO:
      return {todos: handleRemoveTodo(action.payload, state.todos)};
      break;

    default:
      return state;
      break;
  }
};

const handleRemoveTodo = (item, todos) => {
  const todoIndex = todos.indexOf(item);
  todos.splice(todoIndex, 1);
  return todos;
};

export default todoReducer;
