import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './index';
// Redux
import notesActions from '../../modules/notes/actions/actions';
import notesOperations from '../../modules/notes/api';
import notesSelectors from '../../modules/notes/selectors';

class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {

    return <NoteList {...this.props}  />;
  }
}

const mapStateToProps = ({ notes }) => console.log(notes) && ({
  notes: notes.items,
});

const mapDispatchToProps = {
  fetchNotes: notesOperations.fetchNotes,
  deleteNote: notesOperations.deleteNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);