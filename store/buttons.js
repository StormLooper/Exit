/**
 * ACTION TYPES
 */
const DISABLE_BUTTONS = "DISABLE_BUTTONS";
const RESET_BUTTONS = "RESET_BUTTONS"
/**
 * INITIAL STATE
 */
const INITIAL_STATE = {
  bookButton: true,
  faceButton: false,
  tableButton: false,
  chestButton: false,
  skeletonButton: false,
  allCompleted: false
};

/**
 * ACTION CREATORS
 */
export const disableAllExcept = (buttonToEnable, buttonToDisable) => {
  return {
    type: DISABLE_BUTTONS,
    buttonToEnable,
    buttonToDisable
  };
};

export const resetButtons = () => {
  return {
    type: RESET_BUTTONS,
    INITIAL_STATE
  }
}

/**
 * REDUCER
 */
export default function(buttons = INITIAL_STATE, action) {
  switch (action.type) {
    case DISABLE_BUTTONS:
      const newState = { ...buttons };
      newState[action.buttonToEnable] = true;
      newState[action.buttonToDisable] = false;
      return newState;
    case RESET_BUTTONS:
      return action.INITIAL_STATE;
    default:
      return buttons;
  }
}
