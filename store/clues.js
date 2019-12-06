/**
 * ACTION TYPES
 */
const DISABLE_CLUES = "DISABLE_CLUES";

/**
 * INITIAL STATE
 */
const STATE = {
  bookClue: true,
  faceClue: false,
  tableClue: false,
  compassClue: false,
  chestClue: false,
  skeletonClue: false
};

/**
 * ACTION CREATORS
 */
export const disableAllClues = (cluesToEnable, cluesToDisable) => {
  return {
    type: DISABLE_CLUES,
    cluesToEnable,
    cluesToDisable
  };
};

/**
 * REDUCER
 */
export default function(clues = STATE, action) {
  switch (action.type) {
    case DISABLE_CLUES:
      const newState = { ...clues };
      newState[action.cluesToEnable] = true;
      newState[action.cluesToDisable] = false;
      return newState;
    default:
      return clues;
  }
}
