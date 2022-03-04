import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  EDIT_PROJECT,
  TOGGLE_PROJECT,
} from "../action/actionType";

const init = {
  project: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_PROJECT: {
      return {
        ...state,
        project: [...state.project, payload],
      };
    }
    default:
      return state;
    case REMOVE_PROJECT: {
      return {
        ...state,
        project: state.project.filter((e) => e._id !== payload),
      };
    }
    case EDIT_PROJECT: {
      return {
        payload
      };
    }
    // case TOGGLE_PROJECT: {
    //   return {};
    // }
  }
};
