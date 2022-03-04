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

export const removeProject = (payload) => ({
  type: REMOVE_PROJECT,
  payload
});

export const toggleProject = (payload) => ({
  type: TOGGLE_PROJECT,
  payload
});

export const editProject = (payload) => ({
  type: EDIT_PROJECT,
  payload
});
