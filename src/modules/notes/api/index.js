// Core
import axios from 'axios';
import actions from '../actions/actions';

// Root Url
const URL = "http://localhost:4040";

const fetchNotes = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:4040/notes');
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addNote = text => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .post('http://localhost:4040/notes')
    .then(({ data }) => dispatch(actions.addNoteSuccess(data)))
    .catch(error => dispatch(actions.fetchError(error)));
};

const deleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .delete(`http://localhost:4040/notes/${id}`)
    .then(() => {
      dispatch(actions.deleteNoteSuccess(id));
    })
    .catch(error => {
      dispatch(actions.fetchError(error));
    });
};

export default { fetchNotes, addNote, deleteNote };