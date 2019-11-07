// Core
import React from 'react';
// Components
import NotesEditor from './components/NotesEditor/NotesEditor';
import NotesList from './components/NoteList/NoteListContainer';
// Instruments
import './static/index.css';

const App = () =>(
    <>
     <NotesList />
     <NotesEditor />
    </>
)

export default App;
