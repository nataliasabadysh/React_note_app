// Types
import types from '../actions/types';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: types.FETCH_SUCCESS,
  payload: notes,
});

const addNoteSuccess = note => ({
  type: types.ADD_SUCCESS,
  payload: note,
});

const updateNoteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const deleteNoteSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addNoteSuccess,
  deleteNoteSuccess,
  updateNoteSuccess,
  fetchRequest,
  fetchSuccess,
  fetchError,
};