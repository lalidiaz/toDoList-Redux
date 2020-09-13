import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const InitialState = {
  tasks: []
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return Object.assign({}, state, {
        // tasks: [...state.tasks, action.value] 
        tasks: [...state.tasks, {value: action.value, isComplete: false}]
      });
    // case "REMOVE_TASK":
    case 'COMPLETE_TASK':
      const updatedTasks =  state.tasks.map((item, key) => {
        if ( key == action.value){
          item.isComplete = true
        }
        return item
      })
      return Object.assign({}, state, {
        tasks: updatedTasks
      })

      // const newTasks = state.tasks.filter(
      //   (item, index) => index !== action.value
      // );
      // return Object.assign({}, state, {
      //   tasks: newTasks
      // });

    default:
      return state;
  }
};

export const addTask = (task) => dispatch => {
  return dispatch({
    type: "ADD_TASK",
    value: task
  });
};

// export const removeTask = (index) => dispatch => {
  export const completeTask = (index) => dispatch => {
  console.log('3')
    return dispatch({
      type: 'COMPLETE_TASK',
      // type: "REMOVE_TASK",
      value: index
    });
  };

export function initializeStore() {
  return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}