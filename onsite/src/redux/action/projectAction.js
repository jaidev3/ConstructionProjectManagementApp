import {
  ADD_PROJECT,
  EDIT_PROJECT,
  REMOVE_PROJECT,
  TOGGLE_PROJECT,
} from "./actionType";

export const addProject = (payload) => ({
  type: ADD_PROJECT,
  payload,
});

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  payload: id,
});

export const toggleProject = (id) => ({
  type: TOGGLE_PROJECT,
  payload: id,
});

export const editProject = (id) => ({
  type: EDIT_PROJECT,
  payload: id,
});
