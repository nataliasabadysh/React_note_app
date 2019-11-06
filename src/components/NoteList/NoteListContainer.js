import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './index';
// Redux
import notesActions from '../../modules/notes/actions/actions';
import notesOperations from '../../modules/notes/api';
import notesSelectors from '../../modules/notes/selectors/index';

class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getVisibleNotes(state),
});

const mapDispatchToProps = {
  fetchNotes: notesOperations.fetchNotes,
  deleteNote: notesOperations.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);