//Core
import { combineReducers } from 'redux';
// Reducer
import notesReducer from '../modules/notes/reducers/NoteReducer';

export default combineReducers({
  notes: notesReducer,
});