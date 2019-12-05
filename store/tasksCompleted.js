/**
 * ACTION TYPES
 */
const GET_COMPLETED_TASKS = 'GET_COMPLETED_TASKS';
const ADD_MUSIC_TASK = 'ADD_MUSIC_TASK';
const GET_ADDITIONAL_TASK = 'GET_ADDITIONAL_TASK';
const ADD_ADDITIONAL_TASK = 'ADD_ADDITIONAL_TASK';
const RESET_TASKS = 'RESET_TASKS';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = { musisctable: false, additionalTask: false };

/**
 * ACTION CREATORS
 */
export const getCompletedTasks = () => {
  return {
    type: GET_COMPLETED_TASKS,
  };
};

export const getAdditionalTask = () => {
  return {
    type: GET_ADDITIONAL_TASK,
  };
};

export const addCompletedTasks = bool => {
  return {
    type: ADD_MUSIC_TASK,
    bool,
  };
};

export const addAdditionalTask = bool => {
  return {
    type: ADD_ADDITIONAL_TASK,
    bool,
  };
};

export const resetTasks = () => {
  return {
    type: RESET_TASKS,
    INITIAL_STATE,
  };
};

/**
 * REDUCER
 */
export default function(tasksCompleted = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MUSIC_TASK:
      return { ...tasksCompleted, musisctable: action.bool };
    case GET_COMPLETED_TASKS:
      return tasksCompleted;
    case GET_ADDITIONAL_TASK:
      return tasksCompleted;
    case ADD_ADDITIONAL_TASK:
      return { ...tasksCompleted, additionalTask: action.bool };
    case RESET_TASKS:
      return action.INITIAL_STATE;
    default:
      return tasksCompleted;
  }
}
