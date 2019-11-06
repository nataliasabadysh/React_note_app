// Core
import { connect } from 'react-redux';

import NoteEditor from './NotesEditor';
import notesOperations  from '../../modules/notes/api/index';

const mapDispatchToProps = { addNote: notesOperations.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);